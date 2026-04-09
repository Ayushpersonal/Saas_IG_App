import React from 'react';
import { User, Bell, Shield, Key } from 'lucide-react';

export default function Settings() {
  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem' }}>Settings</h1>
        <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Manage your personal profile and workspace preferences.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px' }}>
        {/* Settings Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Profile', icon: User, active: true },
            { label: 'Notifications', icon: Bell },
            { label: 'Security', icon: Shield },
            { label: 'API Keys', icon: Key },
          ].map((nav, i) => (
            <button key={i} style={{ 
              display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', 
              background: nav.active ? 'var(--sys-color-surface-container-lowest)' : 'transparent', 
              border: 'none', color: nav.active ? 'var(--sys-color-primary)' : 'var(--sys-color-on-surface-variant)', 
              fontWeight: 600, cursor: 'pointer',
              boxShadow: nav.active ? '0 4px 6px -1px rgba(25, 28, 30, 0.04)' : 'none'
            }}>
              <nav.icon size={20} />
              {nav.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="panel-low" style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Public Profile</h2>
          <p className="text-sm margin-bottom-8" style={{ color: 'var(--sys-color-on-surface-variant)' }}>This information will be displayed publicly.</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
             <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--sys-color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
               JD
             </div>
             <div>
               <button className="btn-secondary" style={{ marginBottom: '8px' }}>Change Avatar</button>
               <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-on-surface-variant)' }}>JPG, GIF or PNG. Max size of 800K</div>
             </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="label-sm">First Name</label>
                <input className="modern-input" defaultValue="John" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="label-sm">Last Name</label>
                <input className="modern-input" defaultValue="Doe" />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="label-sm">Email Address</label>
              <input className="modern-input" defaultValue="john.doe@cartflow.ai" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="label-sm">Bio</label>
              <textarea className="modern-input" rows="4" defaultValue="Lead Automation Engineer at CartFlow."></textarea>
              <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-on-surface-variant)' }}>Brief description for your profile. URLs are hyperlinked.</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button type="button" className="btn-primary" style={{ width: 'auto' }}>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
