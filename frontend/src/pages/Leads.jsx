import React from 'react';
import { Mail, Phone, MoreHorizontal, Filter, Download } from 'lucide-react';

export default function Leads() {
  const leads = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '+1 555-0100', status: 'New', score: 85 },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 555-0101', status: 'Contacted', score: 62 },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', phone: '+1 555-0102', status: 'Qualified', score: 91 },
    { id: 4, name: 'Diana Evans', email: 'diana@example.com', phone: '+1 555-0103', status: 'New', score: 45 },
    { id: 5, name: 'Evan Frank', email: 'evan@example.com', phone: '+1 555-0104', status: 'Converted', score: 98 },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Leads Directory</h1>
          <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Total active leads: 1,248</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary"><Filter size={18} /> Filter</button>
          <button className="btn-secondary"><Download size={18} /> Export</button>
        </div>
      </header>

      <div className="panel-low" style={{ padding: '32px' }}>
         <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr auto', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--sys-color-surface-container-high)', marginBottom: '16px' }}>
            <span className="label-sm">Name</span>
            <span className="label-sm">Contact</span>
            <span className="label-sm">Status</span>
            <span className="label-sm">Lead Score</span>
            <span className="label-sm">Last Activity</span>
            <span></span>
         </div>
         
         <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
           {leads.map(lead => (
             <div key={lead.id} className="card-lowest" style={{ padding: '16px', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr auto', gap: '16px', alignItems: 'center' }}>
                <div style={{ fontWeight: 600 }}>{lead.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14}/> {lead.email}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14}/> {lead.phone}</div>
                </div>
                <div>
                   <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, backgroundColor: 'var(--sys-color-primary-container)', color: 'var(--sys-color-on-primary-container)' }}>
                     {lead.status}
                   </span>
                </div>
                <div style={{ fontWeight: 700, color: lead.score > 80 ? 'var(--sys-color-primary)' : 'var(--sys-color-on-surface)' }}>{lead.score} / 100</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-secondary)' }}>2 hours ago</div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--sys-color-secondary)' }}>
                  <MoreHorizontal size={20} />
                </button>
             </div>
           ))}
         </div>
         <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <button className="btn-secondary" style={{ width: 'auto' }}>Load More</button>
         </div>
      </div>
    </div>
  );
}
