import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Zap, CreditCard, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Conversations', path: '/conversations', icon: MessageSquare },
  { name: 'Leads', path: '/leads', icon: Users },
  { name: 'Automations', path: '/automations', icon: Zap },
  { name: 'Billing', path: '/billing', icon: CreditCard },
  { name: 'Settings', path: '/settings', icon: SettingsIcon },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'auto' }}>
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
      
      <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--sys-color-surface-container-high)' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
           <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--sys-color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
             {user?.name?.charAt(0) || 'U'}
           </div>
           <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user?.name || 'User'}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>{user?.email || 'Admin'}</div>
           </div>
        </div>
        <button 
          onClick={handleLogout}
          style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 16px', 
            borderRadius: '12px', 
            border: 'none', 
            backgroundColor: 'transparent', 
            color: 'var(--sys-color-error, #ba1a1a)', 
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
