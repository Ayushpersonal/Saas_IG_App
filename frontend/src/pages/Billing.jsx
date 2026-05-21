import React from 'react';
import { CreditCard, CheckCircle, Download } from 'lucide-react';

export default function Billing() {
  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem' }}>Billing & Subscriptions</h1>
        <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Manage your workspace plan and invoices.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '32px' }}>
        {/* Current Plan */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card-lowest" style={{ padding: '32px', borderTop: '4px solid var(--sys-color-primary)' }}>
             <div className="label-sm" style={{ marginBottom: '16px' }}>Current Plan</div>
             <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-headline)', marginBottom: '8px' }}>Pro Tier</div>
             <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)', marginBottom: '24px' }}>$49.00 / month per user</div>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
               {['Unlimited automation flows', 'Advanced AI Lead Scoring', '24/7 Priority Support', 'Custom Integrations'].map((feature, i) => (
                 <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                   <CheckCircle size={16} color="var(--sys-color-primary)" />
                   {feature}
                 </div>
               ))}
             </div>
             
             <button className="btn-secondary" style={{ width: '100%' }}>Manage Plan</button>
          </div>
          
          <div className="panel-low" style={{ padding: '24px' }}>
            <div className="label-sm" style={{ marginBottom: '16px' }}>Payment Method</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '8px', backgroundColor: 'var(--sys-color-surface-container-highest)', borderRadius: '8px' }}>
                <CreditCard size={24} color="var(--sys-color-on-surface)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>•••• •••• •••• 4242</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>Expires 12/24</div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--sys-color-primary)', fontWeight: 600, cursor: 'pointer' }}>Edit</button>
            </div>
          </div>
        </div>

        {/* Invoice History */}
        <div className="panel-low" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Invoices</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--sys-color-surface-container-high)', marginBottom: '16px' }}>
             <span className="label-sm">Invoice ID</span>
             <span className="label-sm">Date</span>
             <span className="label-sm">Amount</span>
             <span></span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'INV-2026-001', date: 'Apr 01, 2026', amount: '$49.00', status: 'Paid' },
              { id: 'INV-2026-002', date: 'Mar 01, 2026', amount: '$49.00', status: 'Paid' },
              { id: 'INV-2026-003', date: 'Feb 01, 2026', amount: '$49.00', status: 'Paid' },
              { id: 'INV-2026-004', date: 'Jan 01, 2026', amount: '$49.00', status: 'Paid' },
            ].map((invoice) => (
              <div key={invoice.id} className="card-lowest" style={{ padding: '16px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '16px', alignItems: 'center' }}>
                 <div style={{ fontWeight: 600 }}>{invoice.id}</div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)' }}>{invoice.date}</div>
                 <div style={{ fontWeight: 600 }}>{invoice.amount}</div>
                 <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--sys-color-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <Download size={18} />
                 </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
