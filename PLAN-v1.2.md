# DClaw Lease — v1.2 Feature Roadmap

> 📘 **REVISED PRD v2.3 available:** See `REVISED-PRD.md` for complete gap analysis, current state, and full feature roadmap.


> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (lease-management), AI product research (VTS, HqO, LeaseQuery, MRI Software)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Lease portfolio CRUD
- [ ] Critical date tracking
- [ ] Document repository
- [ ] Financial summary dashboard
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Lease Copilot (Abstract & Analyze)
**Description:** AI assistant that reads lease documents, answers questions, and extracts key terms. "What's the rent escalation clause for the Main St property?"
- **AI Angle:** Document parsing + RAG over lease portfolio. Structured extraction.
- **Backend:** `/api/v1/ai/lease-chat` endpoint. Lease abstraction pipeline.
- **Frontend:** AI sidebar in lease viewer. Key terms summary cards.
- **Files:** `backend/app/services/lease_ai.py`, `frontend/src/components/lease-copilot.tsx`

#### 2. Lease Abstraction & Data Extraction
**Description:** Upload any lease. AI extracts: rent, term, escalation, renewal options, security deposit, permitted use, subletting rights, etc.
- **AI Angle:** LLM with JSON schema extraction. Validation against lease standard.
- **Backend:** `/api/v1/ai/abstract` endpoint. Data quality checks.
- **Frontend:** Upload → structured data preview. Editable abstraction.
- **Files:** `backend/app/services/abstraction.py`

#### 3. Critical Date & Obligation Tracking
**Description:** Track rent escalations, renewal notice deadlines, insurance renewals, maintenance obligations. Auto-alerts.
- **Backend:** Date calculation engine. Notification system.
- **Frontend:** Critical date calendar. Alert dashboard.
- **Files:** `backend/app/services/critical_dates.py`

#### 4. Lease Financial Summary
**Description:** Portfolio-level financials: total rent, escalations, % of revenue, lease vs buy analysis.
- **Backend:** Financial aggregation + forecasting.
- **Frontend:** Executive dashboard with charts and KPIs.
- **Files:** `frontend/src/app/financials/dashboard.tsx`

### P1 — Should Have (v1.1–1.2)

#### 5. Renewal & Option Analysis
**Description:** Compare renewal options vs market rates. AI recommendation on whether to renew, relocate, or renegotiate.
- **AI Angle:** Market data + financial modeling + recommendation engine.
- **Backend:** Option comparison calculator.
- **Frontend:** Renewal decision support dashboard.

#### 6. CAM/Tax Reconciliation
**Description:** Audit landlord CAM and tax charges against lease terms. Identify overcharges.
- **Backend:** Reconciliation engine with variance analysis.
- **Frontend:** Reconciliation report with flagged discrepancies.

#### 7. Occupancy & Space Planning
**Description:** Floor plans, space utilization, headcount planning, growth projections.
- **Backend:** Space data model. Utilization calculation.
- **Frontend:** Interactive floor plans. Utilization heatmaps.

#### 8. Sublease & Assignment Management
**Description:** Track sublease rights, manage subtenant agreements, monitor compliance.
- **Backend:** Sublease workflow. Compliance tracking.
- **Frontend:** Sublease board with approval status.

### P2 — Could Have (v1.3+)

#### 9. Market Rent Benchmarking
**Description:** AI-powered market rent analysis by location, building class, and tenant size.

#### 10. Sustainability & ESG Tracking
**Description:** Track green lease clauses, energy usage, carbon footprint per property.

#### 11. Lease Accounting (ASC 842/IFRS 16)
**Description:** Auto-generate journal entries, liability schedules, and disclosure reports.

#### 12. AI Negotiation Playbook
**Description:** AI suggests negotiation tactics based on market conditions and landlord profile.

---

## Implementation Priority

1. **Week 1–2:** AI Lease Copilot (P0.1) + Lease Abstraction (P0.2)
2. **Week 3–4:** Critical Dates (P0.3) + Financial Summary (P0.4)
3. **Week 5–6:** Renewal Analysis (P1.5) + CAM Reconciliation (P1.6)
4. **Week 7–8:** Space Planning (P1.7) + Sublease Management (P1.8)
