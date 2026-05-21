import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, User, Shield, Activity, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      await signup(email, password, name);
      setSuccessMsg('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'An error occurred during signup');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Background Subtle Detail */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
        <div style={{ position: 'absolute', top: '-6rem', left: '-6rem', width: '24rem', height: '24rem', backgroundColor: 'var(--sys-color-primary)', borderRadius: '9999px', filter: 'blur(64px)', opacity: 0.1 }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '-12rem', width: '31.25rem', height: '31.25rem', backgroundColor: 'var(--sys-color-secondary-container)', borderRadius: '9999px', filter: 'blur(100px)', opacity: 0.2 }}></div>
      </div>

      <main className="auth-main">
        <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', opacity: 0.7 }}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Brand Identity */}
        <div className="auth-brand">
          <div className="brand-icon-wrapper" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
            <img src="/logo.png" alt="CartFlow Logo" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
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

          <form className="auth-form" onSubmit={handleSubmit}>
            {errorMsg && (
              <div style={{ padding: '12px', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '6px', marginBottom: '16px', fontSize: '14px', border: '1px solid #ffcdd2' }}>
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div style={{ padding: '12px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '6px', marginBottom: '16px', fontSize: '14px', border: '1px solid #a5d6a7' }}>
                {successMsg}
              </div>
            )}
            <div className="form-group">
              <label className="label-sm" htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <User size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="name" type="text" placeholder="John Doe" required className="modern-input" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="label-sm" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Mail size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="email" type="email" placeholder="name@company.com" required className="modern-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="label-sm" htmlFor="password">Password</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Lock size={18} color="var(--sys-color-outline)" />
                </div>
                <input id="password" type="password" placeholder="••••••••" required className="modern-input" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Creating...' : 'Create Account'}</span>
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
