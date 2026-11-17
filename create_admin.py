
from datetime import datetime, timezone
from getpass import getpass

from werkzeug.security import generate_password_hash

from app.database import init_db, get_connection


def create_admin():

    print("\n========== ANNADATA ADMIN CREATION ==========\n")

    name = input("Enter administrator name: ").strip()
    email = input("Enter administrator email: ").strip().lower()

    if not name or not email:
        print("Error: Name and email are required.")
        return

    password = getpass("Enter administrator password: ")
    confirm_password = getpass("Confirm administrator password: ")

    if len(password) < 12:
        print("Error: Password must contain at least 12 characters.")
        return

    if password != confirm_password:
        print("Error: Passwords do not match.")
        return

    init_db()

    connection = get_connection()

    try:
        existing_user = connection.execute(
            "SELECT id FROM users WHERE email = ?",
            (email,)
        ).fetchone()

        if existing_user:
            print("Error: An account with this email already exists.")
            print("No changes were made.")
            return

        password_hash = generate_password_hash(password)

        connection.execute(
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
                name,
                email,
                password_hash,
                "admin",
                "approved",
                datetime.now(timezone.utc).isoformat()
            )
        )

        connection.commit()

        print("\nAdministrator account created successfully!")
        print("Role: admin")
        print("Status: approved")
        print("You can now log in to ANNADATA.")

    except Exception:
        connection.rollback()
        print("An error occurred while creating the administrator.")
        raise

    finally:
        connection.close()


if __name__ == "__main__":
    create_admin()
