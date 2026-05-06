const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function analyzeLease(property_address: string, tenant_name: string) {
  const res = await fetch(`${API_BASE}/analyses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ property_address, tenant_name }),
  });
  if (!res.ok) throw new Error('Failed to analyze lease');
  return res.json();
}

export async function getClauses(analysisId: string) {
  const res = await fetch(`${API_BASE}/analyses/${analysisId}/clauses`);
  if (!res.ok) throw new Error('Failed to fetch clauses');
  return res.json();
}
