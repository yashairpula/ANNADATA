
import pytest

from app import create_app


@pytest.fixture
def client():
    app = create_app({"TESTING": True})
    return app.test_client()


def test_api_info(client):
    response = client.get("/api/")

    assert response.status_code == 200
    assert response.json["name"] == "ANNADATA"
    assert response.json["status"] == "running"


def test_health_check(client):
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json["status"] == "healthy"


def test_unknown_api_route(client):
    response = client.get("/api/unknown")

    assert response.status_code == 404
    assert response.json["error"] == "Not found"


def test_homepage(client):
    response = client.get("/")

    assert response.status_code == 200
    assert b"ANNADATA" in response.data
