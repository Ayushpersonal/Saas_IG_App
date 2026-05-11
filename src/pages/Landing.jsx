import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Zap, MessageSquare, BarChart3, ArrowRight, ShieldCheck, Globe, Home, Users, ShoppingBag, TrendingUp, LayoutDashboard } from 'lucide-react';


export default function Landing() {
  return (
    <div className="landing-page">
      <div className="bg-blur" style={{ top: '-100px', left: '-100px', backgroundColor: 'var(--sys-color-primary)' }}></div>
      <div className="bg-blur" style={{ bottom: '-100px', right: '-100px', backgroundColor: 'var(--sys-color-secondary-container)' }}></div>

      <nav className="nav-container">
        <Link to="/" className="nav-logo">
          <Settings size={28} strokeWidth={2.5} />
          <span>CartFlow AI</span>
        </Link>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <Link to="/login" className="nav-link" style={{ fontWeight: 700, color: 'var(--sys-color-primary)' }}>Sign In</Link>
          <Link to="/signup" className="btn-primary" style={{ width: 'auto', padding: '10px 24px' }}>Get Started</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Now in Private Beta</span>
          <h1 className="hero-title">Automate Your Growth with Conversational AI</h1>
          <p className="hero-subtitle">
            CartFlow AI helps e-commerce brands scale customer support, recovery abandoned carts, and drive revenue through intelligent, human-like conversations.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="btn-primary">
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link to="/login" className="btn-secondary">
              Watch Demo
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div style={{ padding: '24px', textAlign: 'left', background: 'var(--sys-color-surface-container-low)' }}>
             <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', height: '450px' }}>
                <div style={{ backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: '12px', padding: '16px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', padding: '8px' }}>
                      <Settings size={20} color="var(--sys-color-primary)" />
                      <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>CartFlow AI</span>
                   </div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { icon: <LayoutDashboard size={18} />, label: 'Dashboard', active: true },
                        { icon: <MessageSquare size={18} />, label: 'Conversations' },
                        { icon: <Users size={18} />, label: 'Customers' },
                        { icon: <Zap size={18} />, label: 'Automations' },
                        { icon: <ShoppingBag size={18} />, label: 'Orders' },
                      ].map((item, i) => (
                        <div key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '12px', 
                          padding: '10px 12px', 
                          borderRadius: '8px',
                          backgroundColor: item.active ? 'var(--sys-color-primary-container)' : 'transparent',
                          color: item.active ? 'var(--sys-color-on-primary)' : 'var(--sys-color-on-surface-variant)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          opacity: item.active ? 1 : 0.7
                        }}>
                          {item.icon}
                          {item.label}
                        </div>
                      ))}
                   </div>
                </div>
                <div style={{ backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: '12px', padding: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>Overview</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--sys-color-on-surface-variant)' }}>Updated just now</p>
                      </div>
                      <div style={{ padding: '8px 16px', backgroundColor: 'var(--sys-color-primary)', color: 'white', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600 }}>
                         New Report
                      </div>
                   </div>
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                      {[
                        { label: 'Total Revenue', value: '$24,500', trend: '+12%', icon: <TrendingUp size={16} /> },
                        { label: 'Saved Carts', value: '1,284', trend: '+18%', icon: <ShoppingBag size={16} /> },
                        { label: 'Conv. Rate', value: '3.4%', trend: '+5%', icon: <Zap size={16} /> },
                      ].map((stat, i) => (
                        <div key={i} style={{ backgroundColor: 'var(--sys-color-surface-container-low)', borderRadius: '12px', padding: '16px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--sys-color-on-surface-variant)' }}>{stat.label}</span>
                              <div style={{ color: 'var(--sys-color-primary)', opacity: 0.8 }}>{stat.icon}</div>
                           </div>
                           <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>{stat.value}</div>
                           <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>{stat.trend} <span style={{ color: 'var(--sys-color-on-surface-variant)', fontWeight: 400 }}>vs last month</span></div>
                        </div>
                      ))}
                   </div>
                   <div style={{ marginTop: '24px', height: '120px', backgroundColor: 'var(--sys-color-surface-container-low)', borderRadius: '12px', padding: '16px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '16px' }}>Recovery Performance</div>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '60px' }}>
                         {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                           <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: 'var(--sys-color-primary)', borderRadius: '4px', opacity: 0.2 + (i * 0.1) }}></div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <Zap size={24} />
          </div>
          <h3 className="feature-title">Instant Setup</h3>
          <p className="feature-description">Connect your store and launch your first automation in under 5 minutes. No coding required.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <MessageSquare size={24} />
          </div>
          <h3 className="feature-title">Smart Recovery</h3>
          <p className="feature-description">AI-powered abandoned cart recovery that talks to your customers and solves their hurdles.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <BarChart3 size={24} />
          </div>
          <h3 className="feature-title">Epic Insights</h3>
          <p className="feature-description">Track every conversion and interaction with deep analytics that help you optimize your ROI.</p>
        </div>
      </section>

      <footer style={{ padding: '80px', borderTop: '1px solid var(--sys-color-surface-container-high)', textAlign: 'center' }}>
         <div className="nav-logo" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <Settings size={24} />
            <span>CartFlow AI</span>
         </div>
         <p style={{ color: 'var(--sys-color-on-surface-variant)', fontSize: '0.875rem' }}>
            &copy; 2026 CartFlow AI. All rights reserved. Built for the modern commerce.
         </p>
      </footer>
    </div>
  );
}
