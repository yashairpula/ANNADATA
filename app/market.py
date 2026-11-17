
import os
import time
import threading

import requests
from dotenv import load_dotenv

from app.database import (
    init_db,
    save_market_records,
    get_market_history,
    get_market_price_trends,
    get_market_comparison
)


API_URL = (
    "https://api.data.gov.in/resource/"
    "9ef84268-d588-465a-a308-a864a43d0070"
)

CACHE_DURATION = 300
MAX_RECORDS = 100

_cache = {}
_cache_lock = threading.Lock()


def get_market_prices(district=None, commodity=None, limit=20):
    """Fetch Telangana mandi prices and save them in SQLite."""

    load_dotenv()

    api_key = os.getenv("AGMARKNET_API_KEY")

    if not api_key:
        return {
            "error": "AGMARKNET_API_KEY is missing from .env."
        }, 500

    try:
        limit = int(limit)
    except (TypeError, ValueError):
        return {"error": "Limit must be a valid integer."}, 400

    if limit < 1 or limit > MAX_RECORDS:
        return {
            "error": f"Limit must be between 1 and {MAX_RECORDS}."
        }, 400

    district = district.strip() if district else None
    commodity = commodity.strip() if commodity else None

    cache_key = (
        district.lower() if district else "",
        commodity.lower() if commodity else "",
        limit
    )

    # Initialize the database.
    init_db()

    # Check five-minute memory cache.
    with _cache_lock:
        cached = _cache.get(cache_key)

        if cached and time.time() - cached["time"] < CACHE_DURATION:
            result = cached["data"].copy()
            result["cached"] = True
            return result, 200

    params = {
        "api-key": api_key,
        "format": "json",
        "limit": limit,
        "filters[state.keyword]": "Telangana"
    }

    if district:
        params["filters[district]"] = district

    if commodity:
        params["filters[commodity]"] = commodity

    try:
        response = requests.get(
            API_URL,
            params=params,
            headers={
                "User-Agent": "ANNADATA/1.0",
                "Accept": "application/json"
            },
            timeout=(10, 30)
        )

        response.raise_for_status()
        data = response.json()

        if data.get("status") != "ok":
            raise ValueError("Unexpected response from mandi API.")

        records = data.get("records", [])

        # Save live records into SQLite.
        saved_count = save_market_records(records)

        result = {
            "state": "Telangana",
            "source": "data.gov.in",
            "total_records": data.get("total", 0),
            "returned_records": len(records),
            "saved_records": saved_count,
            "price_unit": "INR per quintal",
            "records": records,
            "cached": False
        }

        with _cache_lock:
            _cache[cache_key] = {
                "time": time.time(),
                "data": result
            }

        return result, 200

    except (requests.exceptions.RequestException, ValueError) as error:

        # If the live API fails, try previously stored records.
        try:
            old_records = get_market_history(
                district=district,
                commodity=commodity,
                limit=limit
            )

            if old_records:
                return {
                    "state": "Telangana",
                    "source": "SQLite stored records",
                    "message": (
                        "Live mandi service is unavailable. "
                        "Showing previously stored prices."
                    ),
                    "returned_records": len(old_records),
                    "price_unit": "INR per quintal",
                    "records": old_records,
                    "cached": True
                }, 200

        except Exception:
            pass

        if isinstance(error, requests.exceptions.Timeout):
            message = "Mandi API timed out and no stored prices are available."
        else:
            message = "Unable to retrieve live or stored mandi prices."

        return {"error": message}, 502


def get_saved_market_prices(district=None, commodity=None, limit=100):
    """Retrieve historical market prices from SQLite."""

    try:
        limit = int(limit)
    except (TypeError, ValueError):
        return {"error": "Limit must be a valid integer."}, 400

    if limit < 1 or limit > 500:
        return {
            "error": "Limit must be between 1 and 500."
        }, 400

    try:
        init_db()

        records = get_market_history(
            district=district,
            commodity=commodity,
            limit=limit
        )

        return {
            "state": "Telangana",
            "source": "SQLite",
            "returned_records": len(records),
            "price_unit": "INR per quintal",
            "records": records
        }, 200

    except Exception:
        return {
            "error": "Unable to retrieve saved market prices."
        }, 500


def get_market_trends(district=None, commodity=None):
    """Get historical price trends for Telangana commodities."""

    try:
        init_db()

        trends = get_market_price_trends(
            district=district,
            commodity=commodity
        )

        # Calculate percentage change for each market/commodity series.
        grouped = {}

        for record in trends:
            key = (
                record["district"],
                record["market"],
                record["commodity"]
            )
            grouped.setdefault(key, []).append(record)

        results = []

        for key, records in grouped.items():

            first_price = records[0]["average_modal_price"]
            latest_price = records[-1]["average_modal_price"]

            if first_price is not None and first_price != 0:
                percentage_change = (
                    (latest_price - first_price) / first_price
                ) * 100
            else:
                percentage_change = None

            results.append({
                "district": key[0],
                "market": key[1],
                "commodity": key[2],
                "history": records,
                "first_price": first_price,
                "latest_price": latest_price,
                "percentage_change": (
                    round(percentage_change, 2)
                    if percentage_change is not None
                    else None
                ),
                "trend": (
                    "increasing"
                    if percentage_change is not None
                    and percentage_change > 0
                    else "decreasing"
                    if percentage_change is not None
                    and percentage_change < 0
                    else "unchanged"
                    if percentage_change is not None
                    else "insufficient_data"
                )
            })

        return {
            "state": "Telangana",
            "source": "SQLite",
            "total_trends": len(results),
            "price_unit": "INR per quintal",
            "trends": results
        }, 200

    except Exception:
        return {
            "error": "Unable to calculate market price trends."
        }, 500


def compare_market_prices(commodity, district=None, limit=20):
    """Find the highest recorded mandi prices for a commodity."""

    if not commodity or not commodity.strip():
        return {
            "error": "Please provide a commodity name."
        }, 400

    try:
        limit = int(limit)
    except (TypeError, ValueError):
        return {"error": "Limit must be a valid integer."}, 400

    if limit < 1 or limit > 100:
        return {
            "error": "Limit must be between 1 and 100."
        }, 400

    try:
        init_db()

        markets = get_market_comparison(
            commodity=commodity.strip(),
            district=district.strip() if district else None,
            limit=limit
        )

        if not markets:
            return {
                "state": "Telangana",
                "commodity": commodity,
                "total_markets": 0,
                "best_market": None,
                "markets": [],
                "message": (
                    "No saved market prices found for this commodity. "
                    "Fetch live market prices first."
                )
            }, 200

        best_market = markets[0]

        return {
            "state": "Telangana",
            "commodity": commodity,
            "district_filter": district,
            "total_markets": len(markets),
            "price_unit": "INR per quintal",
            "best_market": best_market,
            "markets": markets
        }, 200

    except Exception:
        return {
            "error": "Unable to compare market prices."
        }, 500
    

def collect_all_market_prices():
    """
    Collect Telangana mandi records using pagination.
    Save each batch into SQLite without relying on the API cache.
    """

    load_dotenv()

    api_key = os.getenv("AGMARKNET_API_KEY")

    if not api_key:
        return {
            "success": False,
            "error": "AGMARKNET_API_KEY is missing from .env."
        }, 500

    page_size = 100
    offset = 0
    total_records = None

    pages_fetched = 0
    records_received = 0
    records_saved = 0

    try:
        while True:

            params = {
                "api-key": api_key,
                "format": "json",
                "limit": page_size,
                "offset": offset,
                "filters[state.keyword]": "Telangana"
            }

            response = requests.get(
                API_URL,
                params=params,
                headers={
                    "User-Agent": "ANNADATA/1.0",
                    "Accept": "application/json"
                },
                timeout=(10, 30)
            )

            response.raise_for_status()

            data = response.json()

            if data.get("status") != "ok":
                raise ValueError("Unexpected response from mandi API.")

            records = data.get("records", [])

            if total_records is None:
                total_records = int(data.get("total", 0))

            if not records:
                break

            saved = save_market_records(records)

            pages_fetched += 1
            records_received += len(records)
            records_saved += saved

            offset += len(records)

            # Stop after reaching the reported total.
            if offset >= total_records:
                break

            # Safety limit: do not collect indefinitely.
            if pages_fetched >= 100:
                break

        # Clear the normal API cache so subsequent requests
        # can retrieve updated market data.
        with _cache_lock:
            _cache.clear()

        return {
            "success": True,
            "state": "Telangana",
            "source": "data.gov.in",
            "reported_total_records": total_records,
            "pages_fetched": pages_fetched,
            "records_received": records_received,
            "new_records_saved": records_saved,
            "message": "Mandi dataset collection completed."
        }, 200

    except (requests.exceptions.RequestException, ValueError) as error:

        return {
            "success": False,
            "error": "Mandi dataset collection failed.",
            "details": str(error),
            "pages_fetched": pages_fetched,
            "records_received": records_received,
            "new_records_saved": records_saved
        }, 502
