
from getpass import getpass
from werkzeug.security import generate_password_hash
from app.database import get_connection


def reset_password():

    email = input("Enter your account email: ").strip().lower()

    password = getpass("Enter your new password: ")
    confirm_password = getpass("Confirm your new password: ")

    if len(password) < 12:
        print("Password must contain at least 12 characters.")
        return

    if password != confirm_password:
        print("Passwords do not match.")
        return

    connection = get_connection()

    try:
        user = connection.execute(
            "SELECT id, role FROM users WHERE email = ?",
            (email,)
        ).fetchone()

        if user is None:
            print("Account not found.")
            return

        password_hash = generate_password_hash(password)

        connection.execute(
            "UPDATE users SET password_hash = ? WHERE email = ?",
            (password_hash, email)
        )

        connection.commit()

        print("\nPassword successfully reset!")
        print("Account role:", user["role"])

    finally:
        connection.close()


if __name__ == "__main__":
    reset_password()
