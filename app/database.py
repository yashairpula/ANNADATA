
import sqlite3
from pathlib import Path
from datetime import datetime, timezone


BASE_DIR = Path(__file__).resolve().parent.parent
DATABASE_DIR = BASE_DIR / "instance"
DATABASE_PATH = DATABASE_DIR / "annadata.db"


def get_connection():
    """Create and return a SQLite database connection."""

    DATABASE_DIR.mkdir(parents=True, exist_ok=True)

    connection = sqlite3.connect(
        DATABASE_PATH,
        timeout=30
    )

    connection.row_factory = sqlite3.Row

    return connection


def init_db():
    """Create tables and indexes, including duplicate protection."""

    connection = get_connection()

    try:
        connection.execute("""
            CREATE TABLE IF NOT EXISTS market_prices (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                state TEXT NOT NULL,
                district TEXT,
                market TEXT,
                commodity TEXT NOT NULL,
                variety TEXT,
                grade TEXT,
                arrival_date TEXT NOT NULL,
                min_price REAL,
                max_price REAL,
                modal_price REAL,
                fetched_at TEXT NOT NULL
            )
        """)

        connection.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                role TEXT NOT NULL DEFAULT 'user'
                    CHECK(role IN ('user', 'admin')),
                status TEXT NOT NULL DEFAULT 'pending'
                    CHECK(status IN ('pending', 'approved', 'rejected')),
                created_at TEXT NOT NULL
            )
        """)

        # Remove existing duplicate observations.
        # Keep the earliest stored copy of each observation.
        connection.execute("""
            DELETE FROM market_prices
            WHERE id NOT IN (
                SELECT MIN(id)
                FROM market_prices
                GROUP BY
                    state,
                    COALESCE(district, ''),
                    COALESCE(market, ''),
                    commodity,
                    COALESCE(variety, ''),
                    COALESCE(grade, ''),
                    arrival_date,
                    COALESCE(min_price, -1),
                    COALESCE(max_price, -1),
                    COALESCE(modal_price, -1)
            )
        """)

        # Prevent duplicate observations, including those
        # containing NULL values.
        connection.execute("""
            CREATE UNIQUE INDEX IF NOT EXISTS
            idx_market_unique_observation
            ON market_prices (
                state,
                COALESCE(district, ''),
                COALESCE(market, ''),
                commodity,
                COALESCE(variety, ''),
                COALESCE(grade, ''),
                arrival_date,
                COALESCE(min_price, -1),
                COALESCE(max_price, -1),
                COALESCE(modal_price, -1)
            )
        """)

        connection.execute("""
            CREATE INDEX IF NOT EXISTS idx_market_district
            ON market_prices(district)
        """)

        connection.execute("""
            CREATE INDEX IF NOT EXISTS idx_market_commodity
            ON market_prices(commodity)
        """)

        connection.execute("""
            CREATE INDEX IF NOT EXISTS idx_market_arrival_date
            ON market_prices(arrival_date)
        """)

        connection.commit()

    finally:
        connection.close()


def save_market_records(records):
    """Save mandi records without creating duplicates."""

    if not records:
        return 0

    fetched_at = datetime.now(timezone.utc).isoformat()

    connection = get_connection()

    try:
        cursor = connection.cursor()
        saved_count = 0

        for record in records:

            cursor.execute("""
                INSERT OR IGNORE INTO market_prices (
                    state,
                    district,
                    market,
                    commodity,
                    variety,
                    grade,
                    arrival_date,
                    min_price,
                    max_price,
                    modal_price,
                    fetched_at
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                record.get("state"),
                record.get("district"),
                record.get("market"),
                record.get("commodity"),
                record.get("variety"),
                record.get("grade"),
                record.get("arrival_date"),
                record.get("min_price"),
                record.get("max_price"),
                record.get("modal_price"),
                fetched_at
            ))

            saved_count += cursor.rowcount

        connection.commit()

        return saved_count

    finally:
        connection.close()


def get_market_history(district=None, commodity=None, limit=100):
    """Retrieve previously stored mandi prices."""

    connection = get_connection()

    try:
        query = """
            SELECT *
            FROM market_prices
            WHERE state = ?
        """

        params = ["Telangana"]

        if district:
            query += " AND district = ?"
            params.append(district)

        if commodity:
            query += " AND commodity LIKE ?"
            params.append(f"%{commodity}%")

        query += """
            ORDER BY arrival_date DESC, fetched_at DESC
            LIMIT ?
        """

        params.append(limit)

        rows = connection.execute(query, params).fetchall()

        return [dict(row) for row in rows]

    finally:
        connection.close()


def get_market_price_trends(district=None, commodity=None, days=30):
    """Retrieve daily market-price trends from SQLite."""

    connection = get_connection()

    try:
        query = """
            SELECT
                arrival_date,
                commodity,
                district,
                market,
                AVG(modal_price) AS average_modal_price,
                MIN(modal_price) AS lowest_modal_price,
                MAX(modal_price) AS highest_modal_price,
                COUNT(*) AS observations
            FROM market_prices
            WHERE state = ?
        """

        params = ["Telangana"]

        if district:
            query += " AND district = ?"
            params.append(district)

        if commodity:
            query += " AND commodity LIKE ?"
            params.append(f"%{commodity}%")

        query += """
            GROUP BY arrival_date, commodity, district, market
            ORDER BY arrival_date ASC
        """

        rows = connection.execute(query, params).fetchall()

        return [dict(row) for row in rows]

    finally:
        connection.close()


def get_market_comparison(commodity, district=None, limit=20):
    """Compare the latest recorded price for each mandi market."""

    connection = get_connection()

    try:
        query = """
            SELECT
                market,
                district,
                commodity,
                arrival_date,
                modal_price,
                min_price,
                max_price,
                fetched_at
            FROM market_prices AS current
            WHERE state = ?
              AND commodity LIKE ?
              AND modal_price IS NOT NULL
              AND arrival_date = (
                  SELECT MAX(previous.arrival_date)
                  FROM market_prices AS previous
                  WHERE previous.state = current.state
                    AND previous.market = current.market
                    AND previous.district IS current.district
                    AND previous.commodity = current.commodity
              )
        """

        params = ["Telangana", f"%{commodity}%"]

        if district:
            query += " AND district = ?"
            params.append(district)

        query += """
            ORDER BY modal_price DESC
            LIMIT ?
        """

        params.append(limit)

        rows = connection.execute(query, params).fetchall()

        return [dict(row) for row in rows]

    finally:
        connection.close()


def get_all_users():
    """Retrieve all registered users without exposing passwords."""

    connection = get_connection()

    try:
        rows = connection.execute("""
            SELECT id, name, email, role, status, created_at
            FROM users
            ORDER BY created_at DESC
        """).fetchall()

        return [dict(row) for row in rows]

    finally:
        connection.close()


def get_pending_users():
    """Retrieve users waiting for administrator approval."""

    connection = get_connection()

    try:
        rows = connection.execute("""
            SELECT id, name, email, role, status, created_at
            FROM users
            WHERE status = 'pending'
              AND role = 'user'
            ORDER BY created_at ASC
        """).fetchall()

        return [dict(row) for row in rows]

    finally:
        connection.close()


def approve_user(user_id):
    """Approve a pending user account."""

    connection = get_connection()

    try:
        cursor = connection.execute("""
            UPDATE users
            SET status = 'approved'
            WHERE id = ?
              AND role = 'user'
              AND status = 'pending'
        """, (user_id,))

        connection.commit()

        return cursor.rowcount > 0

    finally:
        connection.close()


def reject_user(user_id):
    """Reject a pending user account."""

    connection = get_connection()

    try:
        cursor = connection.execute("""
            UPDATE users
            SET status = 'rejected'
            WHERE id = ?
              AND role = 'user'
              AND status = 'pending'
        """, (user_id,))

        connection.commit()

        return cursor.rowcount > 0

    finally:
        connection.close()
