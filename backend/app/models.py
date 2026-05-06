from sqlalchemy import Column, String, Float, DateTime, func
from app.database import Base

class LeaseAnalysisDB(Base):
    __tablename__ = "lease_analyses"
    id = Column(String, primary_key=True)
    property_address = Column(String, nullable=False)
    tenant_name = Column(String, nullable=False)
    rent_escalation_percent = Column(Float)
    renewal_risk = Column(String)
    market_comparison = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
