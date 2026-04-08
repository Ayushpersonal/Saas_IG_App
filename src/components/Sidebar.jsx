import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Zap, CreditCard, Settings as SettingsIcon } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Conversations', path: '/conversations', icon: MessageSquare },
  { name: 'Leads', path: '/leads', icon: Users },
  { name: 'Automations', path: '/automations', icon: Zap },
  { name: 'Billing', path: '/billing', icon: CreditCard },
  { name: 'Settings', path: '/settings', icon: SettingsIcon },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: 'var(--sys-color-primary)', padding: '8px', borderRadius: '50%' }}>
          <SettingsIcon size={20} color="var(--sys-color-on-primary)" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>CartFlow AI</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>Automation Hub</span>
        </div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: isActive ? 'var(--sys-color-primary)' : 'var(--sys-color-on-surface-variant)',
              backgroundColor: isActive ? 'var(--sys-color-surface-container-high)' : 'transparent',
              transition: 'all 0.2s'
            })}
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--sys-color-surface-container-high)', display: 'flex', gap: '12px', alignItems: 'center' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--sys-color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
           JD
         </div>
         <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>John Doe</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>Admin</div>
         </div>
      </div>
    </aside>
  );
}
