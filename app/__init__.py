import os

from dotenv import load_dotenv
from flask import Flask, jsonify, render_template, request
from flask import flash, redirect, url_for
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user
)
from app.models import User
from flask_wtf.csrf import CSRFProtect

from app.weather import get_weather
from app.districts import TELANGANA_DISTRICTS
from app.market import (
    get_market_prices,
    get_saved_market_prices,
    get_market_trends,
    compare_market_prices
)
from functools import wraps
from flask import abort
from app.database import (
    init_db,
    get_all_users,
    get_pending_users,
    approve_user,
    reject_user
)
from concurrent.futures import ThreadPoolExecutor, as_completed

def admin_required(function):

    @wraps(function)
    @login_required
    def decorated_function(*args, **kwargs):

        if current_user.role != "admin":
            abort(403)

        return function(*args, **kwargs)

    return decorated_function

def create_app(test_config=None):

    load_dotenv()

    app = Flask(__name__)

    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    # Security settings
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SAMESITE"] = "Lax"

    if test_config is not None:
        app.config.update(test_config)

    if not app.config.get("SECRET_KEY"):
        raise RuntimeError(
            "SECRET_KEY is missing. Add it to your .env file."
        )

    # Initialize database
    init_db()

    # Flask Login
    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = "login"
    from app.models import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.get_by_id(user_id)

    # CSRF protection
    csrf = CSRFProtect()
    csrf.init_app(app)

        # -----------------------------------
    # USER REGISTRATION
    # -----------------------------------

    @app.route("/register", methods=["GET", "POST"])
    def register():

        if request.method == "POST":

            name = request.form.get("name", "").strip()
            email = request.form.get("email", "").strip().lower()
            password = request.form.get("password", "")
            confirm_password = request.form.get("confirm_password", "")

            if not name or not email or not password:
                flash("Please fill in all required fields.", "error")
                return redirect(url_for("register"))

            if len(password) < 10:
                flash("Password must contain at least 10 characters.", "error")
                return redirect(url_for("register"))

            if password != confirm_password:
                flash("Passwords do not match.", "error")
                return redirect(url_for("register"))

            if User.get_by_email(email):
                flash("An account with this email already exists.", "error")
                return redirect(url_for("register"))

            try:
                User.register(name, email, password)
                flash(
                    "Registration successful! Wait for administrator approval.",
                    "success"
                )
                return redirect(url_for("login"))

            except Exception:
                app.logger.exception("Registration failed")
                flash("Registration failed. Please try again.", "error")
                return redirect(url_for("register"))

        return render_template("register.html")


    # -----------------------------------
    # USER LOGIN
    # -----------------------------------

    @app.route("/login", methods=["GET", "POST"])
    def login():

        if request.method == "POST":

            email = request.form.get("email", "").strip().lower()
            password = request.form.get("password", "")

            user = User.get_by_email(email)

            if not user or not User.verify_password(user, password):
                flash("Invalid email or password.", "error")
                return redirect(url_for("login"))

            if user.status != "approved":
                flash(
                    "Your account is awaiting administrator approval "
                    if user.status == "pending"
                    else "Your account has not been approved.",
                    "error"
                )
                return redirect(url_for("login"))

            login_user(user)

            if user.role == "admin":
                return redirect(url_for("admin_dashboard"))

            return redirect(url_for("user_dashboard"))

        return render_template("login.html")


    # -----------------------------------
    # USER LOGOUT
    # -----------------------------------

    @app.route("/logout", methods=["POST"])
    @login_required
    def logout():

        logout_user()

        flash("You have been logged out.", "success")

        return redirect(url_for("login"))

        # -----------------------------------
    # USER DASHBOARD
    # -----------------------------------

    @app.route("/dashboard")
    @login_required
    def user_dashboard():

        if current_user.role == "admin":
            return redirect(url_for("admin_dashboard"))

        return render_template("user_dashboard.html")


    # -----------------------------------
    # ADMIN DASHBOARD
    # -----------------------------------

    @app.route("/admin")
    @login_required
    def admin_dashboard():

        if current_user.role != "admin":
            return jsonify({
                "error": "Forbidden",
                "message": "Administrator access required."
            }), 403

        return redirect(url_for("admin_users"))

        # -----------------------------------
    # ADMIN USER MANAGEMENT
    # -----------------------------------

    @app.route("/admin/users")
    @admin_required
    def admin_users():

        users = get_all_users()
        pending_users = get_pending_users()

        return render_template(
            "admin_users.html",
            users=users,
            pending_users=pending_users
        )


    @app.route("/admin/users/approve/<int:user_id>", methods=["POST"])
    @admin_required
    def approve_user_route(user_id):

        if approve_user(user_id):
            flash("User approved successfully.", "success")
        else:
            flash("User not found or already processed.", "error")

        return redirect(url_for("admin_users"))


    @app.route("/admin/users/reject/<int:user_id>", methods=["POST"])
    @admin_required
    def reject_user_route(user_id):

        if reject_user(user_id):
            flash("User rejected successfully.", "success")
        else:
            flash("User not found or already processed.", "error")

        return redirect(url_for("admin_users"))

    # -----------------------------------
    # HOME PAGE
    # -----------------------------------

    @app.route("/")
    def home():
        return render_template("index.html")

    # -----------------------------------
    # API INFORMATION
    # -----------------------------------

    @app.route("/api/", methods=["GET"])
    def api_info():
        return jsonify({
            "name": "ANNADATA",
            "description": (
                "AI-driven Network for Nurturing Agriculture "
                "through Data Analytics and Technology Assistance"
            ),
            "status": "running",
            "version": "1.0.0"
        }), 200

    # -----------------------------------
    # GENERAL HEALTH CHECK
    # -----------------------------------

    @app.route("/api/health", methods=["GET"])
    def health_check():
        return jsonify({
            "status": "healthy",
            "service": "ANNADATA backend"
        }), 200

    # -----------------------------------
    # HYDERABAD WEATHER
    # -----------------------------------

    @app.route("/api/weather/hyderabad", methods=["GET"])
    def hyderabad_weather():

        weather_data = get_weather(17.3850, 78.4867)

        if "error" in weather_data:
            return jsonify(weather_data), 500

        return jsonify(weather_data), 200

    # -----------------------------------
    # TELANGANA WEATHER
    # -----------------------------------

    @app.route("/api/weather/telangana", methods=["GET"])
    def telangana_weather():

        all_weather = {}

        def fetch_district_weather(district, coordinates):
            latitude = coordinates["latitude"]
            longitude = coordinates["longitude"]

            weather_data = get_weather(latitude, longitude)

            return district, weather_data

        with ThreadPoolExecutor(max_workers=3) as executor:

            futures = [
                executor.submit(
                    fetch_district_weather,
                    district,
                    coordinates
                )
                for district, coordinates in TELANGANA_DISTRICTS.items()
            ]

            for future in as_completed(futures):

                district, weather_data = future.result()

                if "error" in weather_data:
                    all_weather[district] = {
                        "error": weather_data["error"]
                    }
                else:
                    all_weather[district] = weather_data["daily"]

        return jsonify({
            "state": "Telangana",
            "total_districts": len(TELANGANA_DISTRICTS),
            "weather": all_weather
        }), 200

    # -----------------------------------
    # LIVE MANDI MARKET PRICES
    # -----------------------------------

    @app.route("/api/market-prices", methods=["GET"])
    def market_prices():

        district = request.args.get("district")
        commodity = request.args.get("commodity")
        limit = request.args.get("limit", 20)

        result, status_code = get_market_prices(
            district=district,
            commodity=commodity,
            limit=limit
        )

        return jsonify(result), status_code

    # -----------------------------------
    # MARKET PRICE SERVICE HEALTH
    # -----------------------------------

    @app.route("/api/market-prices/health", methods=["GET"])
    def market_health():

        return jsonify({
            "service": "ANNADATA Mandi Price Service",
            "status": "configured",
            "data_source": "data.gov.in",
            "state": "Telangana"
        }), 200

    # -----------------------------------
    # HISTORICAL MARKET PRICES
    # -----------------------------------

    @app.route("/api/market-prices/history", methods=["GET"])
    def market_price_history():

        district = request.args.get("district")
        commodity = request.args.get("commodity")
        limit = request.args.get("limit", 100)

        result, status_code = get_saved_market_prices(
            district=district,
            commodity=commodity,
            limit=limit
        )

        return jsonify(result), status_code

        # -----------------------------------
    # MARKET PRICE TRENDS
    # -----------------------------------

    @app.route("/api/market-prices/trends", methods=["GET"])
    def market_price_trends():

        district = request.args.get("district")
        commodity = request.args.get("commodity")

        result, status_code = get_market_trends(
            district=district,
            commodity=commodity
        )

        return jsonify(result), status_code

        # -----------------------------------
    # BEST MARKET PRICE COMPARISON
    # -----------------------------------

    @app.route("/api/market-prices/compare", methods=["GET"])
    def market_price_comparison():

        commodity = request.args.get("commodity")
        district = request.args.get("district")
        limit = request.args.get("limit", 20)

        result, status_code = compare_market_prices(
            commodity=commodity,
            district=district,
            limit=limit
        )

        return jsonify(result), status_code

    # -----------------------------------
    # 404 ERROR HANDLER
    # -----------------------------------

    @app.errorhandler(404)
    def not_found(error):

        if request.path.startswith("/api/"):
            return jsonify({
                "error": "Not found",
                "message": "The requested API endpoint does not exist."
            }), 404

        return error

    return app
