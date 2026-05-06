'use client';
import { useState } from 'react';
import { analyzeLease, getClauses } from '@/lib/api';

export default function Dashboard() {
  const [propertyAddress, setPropertyAddress] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [result, setResult] = useState<any>(null);
  const [clauses, setClauses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const data = await analyzeLease(propertyAddress, tenantName);
      setResult(data);
      const c = await getClauses(data.id);
      setClauses(c);
    } catch (e) {
      alert('Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{padding:40,maxWidth:800}}>
      <div style={{display:'flex',gap:12,marginBottom:24}}>
        <input placeholder="Property address" value={propertyAddress} onChange={e => setPropertyAddress(e.target.value)}
          style={{padding:'10px 16px',borderRadius:8,border:'1px solid #334155',background:'#1e293b',color:'#f8fafc',minWidth:200}} />
        <input placeholder="Tenant name" value={tenantName} onChange={e => setTenantName(e.target.value)}
          style={{padding:'10px 16px',borderRadius:8,border:'1px solid #334155',background:'#1e293b',color:'#f8fafc',minWidth:200}} />
        <button onClick={handleAnalyze} disabled={loading}
          style={{padding:'10px 20px',borderRadius:8,border:'none',background:'#DB2777',color:'#fff',cursor:'pointer'}}>
          {loading ? 'Analyzing...' : 'Analyze Lease'}
        </button>
      </div>

      {result && (
        <div style={{display:'grid',gap:16}}>
          <div style={{padding:20,borderRadius:12,background:'#1e293b',border:'1px solid #334155'}}>
            <h3 style={{marginBottom:12,color:'#DB2777'}}>Lease Analysis Result</h3>
            <p><strong>Property:</strong> {result.property_address}</p>
            <p><strong>Tenant:</strong> {result.tenant_name}</p>
            <p><strong>Rent escalation:</strong> {result.rent_escalation_percent}%</p>
            <p><strong>Renewal risk:</strong> {result.renewal_risk}</p>
            <p><strong>Market comparison:</strong> {result.market_comparison}</p>
          </div>
          {clauses.length > 0 && (
            <div style={{padding:20,borderRadius:12,background:'#1e293b',border:'1px solid #334155'}}>
              <h3 style={{marginBottom:12,color:'#DB2777'}}>Key Lease Clauses</h3>
              {clauses.map((clause, i) => (
                <p key={i}><strong>{clause.title}:</strong> {clause.summary}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
