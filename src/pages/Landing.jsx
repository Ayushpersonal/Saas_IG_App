import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Zap, MessageSquare, BarChart3, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

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
             <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '24px', height: '400px' }}>
                <div style={{ backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: '12px', padding: '16px' }}>
                   <div style={{ height: '20px', width: '60%', backgroundColor: 'var(--sys-color-surface-container-high)', borderRadius: '4px', marginBottom: '12px' }}></div>
                   <div style={{ height: '20px', width: '80%', backgroundColor: 'var(--sys-color-surface-container-high)', borderRadius: '4px', marginBottom: '32px' }}></div>
                   <div style={{ height: '32px', width: '100%', backgroundColor: 'var(--sys-color-primary)', opacity: 0.1, borderRadius: '8px', marginBottom: '12px' }}></div>
                   {[1,2,3,4].map(i => (
                     <div key={i} style={{ height: '20px', width: '100%', backgroundColor: 'var(--sys-color-surface-container-high)', borderRadius: '4px', marginBottom: '12px', opacity: 0.5 }}></div>
                   ))}
                </div>
                <div style={{ backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: '12px', padding: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                      <div style={{ height: '24px', width: '150px', backgroundColor: 'var(--sys-color-surface-container-highest)', borderRadius: '6px' }}></div>
                      <div style={{ height: '32px', width: '100px', backgroundColor: 'var(--sys-color-primary)', borderRadius: '8px' }}></div>
                   </div>
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                      {[1,2,3].map(i => (
                        <div key={i} style={{ height: '100px', backgroundColor: 'var(--sys-color-surface-container-low)', borderRadius: '12px', padding: '16px' }}>
                           <div style={{ height: '12px', width: '40%', backgroundColor: 'var(--sys-color-surface-container-highest)', borderRadius: '4px', marginBottom: '8px' }}></div>
                           <div style={{ height: '24px', width: '70%', backgroundColor: 'var(--sys-color-on-surface)', opacity: 0.1, borderRadius: '4px' }}></div>
                        </div>
                      ))}
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
