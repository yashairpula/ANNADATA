
import requests
import time


def get_weather(latitude, longitude):
    """
    Fetch daily weather forecast for a given location.
    Retries failed requests up to 3 times.
    """

    url = "https://api.open-meteo.com/v1/forecast"

    params = {
        "latitude": latitude,
        "longitude": longitude,
        "daily": [
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_sum",
            "precipitation_probability_max"
        ],
        "timezone": "Asia/Kolkata",
        "forecast_days": 7
    }

    max_retries = 4

    for attempt in range(max_retries):
        try:
            response = requests.get(
                url,
                params=params,
                timeout=30
            )

            response.raise_for_status()

            data = response.json()

            return {
                "location": {
                    "latitude": latitude,
                    "longitude": longitude
                },
                "daily": data["daily"]
            }

        except requests.exceptions.RequestException as error:
            print(
                f"Weather request failed "
                f"(attempt {attempt + 1}/{max_retries}): {error}"
            )

            if attempt < max_retries - 1:
                time.sleep(2)

    return {
        "error": "Weather data unavailable after 3 attempts."
    }
