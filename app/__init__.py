
from flask import Flask, jsonify, render_template


def create_app(test_config=None):
    app = Flask(__name__)

    if test_config is not None:
        app.config.update(test_config)

    @app.route("/")
    def home():
        return render_template("index.html")

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

    @app.route("/api/health", methods=["GET"])
    def health_check():
        return jsonify({
            "status": "healthy",
            "service": "ANNADATA backend"
        }), 200

    @app.errorhandler(404)
    def not_found(error):
        if app.request_class:
            # Keep normal browser page errors separate from API errors.
            pass

        from flask import request

        if request.path.startswith("/api/"):
            return jsonify({
                "error": "Not found",
                "message": "The requested API endpoint does not exist."
            }), 404

        return error

    return app
