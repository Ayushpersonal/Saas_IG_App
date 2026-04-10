import React from 'react';
import { Settings, Lock, Mail, ArrowRight, Shield, Activity } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setEmail('demo@cartflow.ai');
    setPassword('demo1234');
  };

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
          <p style={{ color: 'var(--sys-color-secondary)', fontWeight: 500, letterSpacing: '-0.025em' }}>Automation Hub</p>
        </div>

        {/* Login Card */}
        <div className="card-lowest auth-card" style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <div className="form-group margin-bottom-8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2>Welcome back</h2>
                <p className="text-sm margin-top-2" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Enter your credentials to access your dashboard.</p>
              </div>
              <button 
                onClick={handleDemoLogin}
                className="btn-text"
                style={{ fontSize: '0.75rem', padding: '4px 8px', backgroundColor: 'var(--sys-color-secondary-container)', color: 'var(--sys-color-on-secondary-container)', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}
              >
                Use Demo
              </button>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-sm" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Mail size={18} color="var(--sys-color-outline)" />
                </div>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  required 
                  className="modern-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-header">
                <label className="label-sm" htmlFor="password">Password</label>
                <Link to="#" className="text-sm" style={{ color: 'var(--sys-color-primary)', fontWeight: 600, textDecoration: 'none' }}>Forgot password?</Link>
              </div>
              <div className="input-with-icon">
                <div className="input-icon">
                  <Lock size={18} color="var(--sys-color-outline)" />
                </div>
                <input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="modern-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p style={{ fontSize: '11px', color: 'var(--sys-color-outline)', marginTop: '8px' }}>
                Quick Demo: <b>demo@cartflow.ai</b> / <b>demo1234</b>
              </p>
            </div>

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
              <ArrowRight size={18} />
            </button>

            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">Or continue with</span>
              <div className="divider-line"></div>
            </div>

            <button type="button" className="btn-secondary">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDATqmzJoMKcyhZcIgfuWRQ3n82e2Dd9ZqaBzZNb_2tLQ8xCtIHNDx33cwxRrpdpEWh7qK-kfbODdjx3JSRmgR_wdGHFSvRiPa_Dg9nAr3y_emU3L-CE5E2-FwiksDJtCnOJPvJV6hb2xcGDyNsy0V2ulgM7vHRKVy4UrcJRWOSjYOpGcTi7dcV_HLhmgZZkesUMz_xs69w0XXyt2IYvYr8XzxwevhXOM_57FgO4uI131L-aT-8J6ESB26XCDzxoqufzLKUBQggNiz1" alt="Google" style={{ width: '20px', height: '20px' }} />
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>

        <div className="auth-footer">
           Don't have an account? <Link to="/signup">Create an account</Link>
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
