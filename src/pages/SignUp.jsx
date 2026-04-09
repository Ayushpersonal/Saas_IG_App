import React from 'react';
import { Settings, Lock, Mail, ArrowRight, User, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="auth-page">
      {/* Background Subtle Detail */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
        <div style={{ position: 'absolute', top: '-6rem', left: '-6rem', width: '24rem', height: '24rem', backgroundColor: 'var(--sys-color-primary)', borderRadius: '9999px', filter: 'blur(64px)', opacity: 0.1 }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '-12rem', width: '31.25rem', height: '31.25rem', backgroundColor: 'var(--sys-color-secondary-container)', borderRadius: '9999px', filter: 'blur(100px)', opacity: 0.2 }}></div>
      </div>

      <main className="auth-main">
        {/* Brand Identity */}
        <div className="auth-brand">
          <div className="brand-icon-wrapper">
            <Settings size={32} color="var(--sys-color-on-primary)" strokeWidth={1.5} />
          </div>
          <h1>CartFlow AI</h1>
          <p style={{ color: 'var(--sys-color-secondary)', fontWeight: 500, letterSpacing: '-0.025em' }}>Create your workspace</p>
        </div>

        {/* Auth Card */}
        <div className="card-lowest auth-card" style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <div className="form-group margin-bottom-8">
            <h2>Get Started</h2>
            <p className="text-sm margin-top-2" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Enter your details to create an account.</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="label-sm" htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <User size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="name" type="text" placeholder="John Doe" required className="modern-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="label-sm" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Mail size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="email" type="email" placeholder="name@company.com" required className="modern-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="label-sm" htmlFor="password">Password</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Lock size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="password" type="password" placeholder="••••••••" required className="modern-input" />
              </div>
            </div>

            <button type="submit" className="btn-primary" onClick={(e) => {e.preventDefault(); window.location.href='/dashboard'}}>
              <span>Create Account</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        <div className="auth-footer">
           Already have an account? <Link to="/login">Sign in</Link>
        </div>

        {/* Decorative */}
        <div className="decorations">
          <div className="decoration-item">
            <Shield size={20} color="var(--sys-color-primary)" fill="var(--sys-color-primary)" fillOpacity={0.2} />
            <p className="label-sm">Secure Shell</p>
            <p style={{ fontSize: '10px', color: 'var(--sys-color-on-surface-variant)', lineHeight: 1.2 }}>256-bit encrypted data tunnel.</p>
          </div>
          <div className="decoration-item">
            <Activity size={20} color="var(--sys-color-primary)" fill="var(--sys-color-primary)" fillOpacity={0.2} />
            <p className="label-sm">Real-time Sync</p>
            <p style={{ fontSize: '10px', color: 'var(--sys-color-on-surface-variant)', lineHeight: 1.2 }}>Cloud-native architecture.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
