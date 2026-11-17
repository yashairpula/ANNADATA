
from datetime import datetime, timezone

from werkzeug.security import generate_password_hash, check_password_hash

from app.database import get_connection


class User:
    def __init__(
        self,
        user_id,
        name,
        email,
        password_hash,
        role,
        status
    ):
        self.id = user_id
        self.name = name
        self.email = email
        self.password_hash = password_hash
        self.role = role
        self.status = status
        self.is_authenticated = True
        self.is_active = status == "approved"
        self.is_anonymous = False

    def get_id(self):
        return str(self.id)

    @staticmethod
    def get_by_id(user_id):
        connection = get_connection()

        try:
            row = connection.execute(
                "SELECT * FROM users WHERE id = ?",
                (user_id,)
            ).fetchone()

            if row is None:
                return None

            return User(
                user_id=row["id"],
                name=row["name"],
                email=row["email"],
                password_hash=row["password_hash"],
                role=row["role"],
                status=row["status"]
            )

        finally:
            connection.close()

    @staticmethod
    def get_by_email(email):
        connection = get_connection()

        try:
            row = connection.execute(
                """
                SELECT * FROM users
                WHERE email = ?
                """,
                (email.lower(),)
            ).fetchone()

            if row:
                return User(
                    row["id"],
                    row["name"],
                    row["email"],
                    row["password_hash"],
                    row["role"],
                    row["status"]
                )

            return None

        finally:
            connection.close()

    @staticmethod
    def register(name, email, password):
        connection = get_connection()

        try:
            password_hash = generate_password_hash(password)

            cursor = connection.execute(
                """
                INSERT INTO users (
                    name,
                    email,
                    password_hash,
                    role,
                    status,
                    created_at
                )
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    name.strip(),
                    email.strip().lower(),
                    password_hash,
                    "user",
                    "pending",
                    datetime.now(timezone.utc).isoformat()
                )
            )

            connection.commit()

            return cursor.lastrowid

        finally:
            connection.close()

    @staticmethod
    def verify_password(user, password):
        return check_password_hash(
            user.password_hash,
            password
        )

    