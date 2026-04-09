import React from 'react';
import { TrendingUp, Users, MessageSquare, Zap, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Overview</h1>
          <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Monitor your active workflows and metrics.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">Export Report</button>
          <button className="btn-primary">New Workflow</button>
        </div>
      </header>

      {/* Metrics Row using explicit Layout principle (stacking sheets) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {[
          { label: 'Active Leads', value: '1,248', growth: '+12%', icon: Users },
          { label: 'Open Conversations', value: '86', growth: '+5%', icon: MessageSquare },
          { label: 'Automations Run', value: '14,093', growth: '+24%', icon: Zap },
          { label: 'Conversion Rate', value: '18.4%', growth: '+2%', icon: TrendingUp },
        ].map((stat, i) => (
          <div key={i} className="card-lowest" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span className="label-sm">{stat.label}</span>
               <stat.icon size={20} color="var(--sys-color-primary)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-headline)', lineHeight: 1 }}>{stat.value}</span>
              <span style={{ color: 'var(--sys-color-primary)', display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 600, paddingBottom: '4px' }}>
                {stat.growth} <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Main Chart Area */}
        <div className="panel-low" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Workflow Engagement</h2>
          <p className="text-sm margin-bottom-8" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Total number of interactions processed.</p>
          <div style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            {/* Mock chart bars */}
            {[40, 60, 30, 80, 50, 90, 70, 100, 60, 40].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 7 ? 'var(--sys-color-primary)' : 'var(--sys-color-primary-fixed-dim)', borderRadius: '4px 4px 0 0', opacity: i === 7 ? 1 : 0.6, transition: 'opacity 0.2s' }}></div>
            ))}
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="panel-low" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Recent Activity</h2>
          <p className="text-sm margin-bottom-8" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Latest automated actions.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'New lead captured', time: 'Just now', type: 'lead' },
              { title: 'Welcome sequence triggered', time: '5m ago', type: 'automation' },
              { title: 'Invoice payment failed', time: '12m ago', type: 'billing' },
              { title: 'Support chat initiated', time: '21m ago', type: 'chat' },
              { title: 'Onboarding completed', time: '1h ago', type: 'lead' },
            ].map((activity, i) => (
              <div key={i} className="card-lowest" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: activity.type === 'billing' ? 'var(--sys-color-error)' : 'var(--sys-color-primary)' }}></div>
                 <div style={{ flex: 1 }}>
                   <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{activity.title}</div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>{activity.time}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
