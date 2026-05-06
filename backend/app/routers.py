from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime
import uuid, random
from app.database import get_db

router = APIRouter()

class CreateAnalysisRequest(BaseModel):
    property_address: str
    tenant_name: str

class LeaseAnalysis(BaseModel):
    id: str
    property_address: str
    tenant_name: str
    rent_escalation_percent: float
    renewal_risk: str
    market_comparison: str
    created_at: datetime

    class Config:
        from_attributes = True

@router.post("/analyses", response_model=LeaseAnalysis)
def create_analysis(req: CreateAnalysisRequest, db: Session = Depends(get_db)):
    return LeaseAnalysis(
        id=str(uuid.uuid4()),
        property_address=req.property_address,
        tenant_name=req.tenant_name,
        rent_escalation_percent=round(random.uniform(2, 8), 1),
        renewal_risk="Low",
        market_comparison="5% below market",
        created_at=datetime.utcnow(),
    )

@router.get("/analyses/{id}/clauses")
def get_clauses(id: str, db: Session = Depends(get_db)):
    return [
        {"title": "Rent Escalation", "summary": "Annual CPI-linked increase capped at 3%."},
        {"title": "Assignment & Subletting", "summary": "Requires landlord consent, not to be unreasonably withheld."},
        {"title": "Renewal Option", "summary": "Tenant has one 5-year renewal option with 6-month advance notice."},
    ]
