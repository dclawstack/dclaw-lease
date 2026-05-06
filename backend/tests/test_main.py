from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_create_analysis():
    response = client.post("/analyses", json={"property_address": "123 Main St", "tenant_name": "Acme Corp"})
    assert response.status_code == 200
    data = response.json()
    assert data["property_address"] == "123 Main St"
    assert data["tenant_name"] == "Acme Corp"
    assert "id" in data

def test_get_clauses():
    response = client.get("/analyses/abc/clauses")
    assert response.status_code == 200
    assert len(response.json()) == 3
