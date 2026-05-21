import React from 'react';
import { Play, Plus, ArrowRight, Zap, Target, Mail } from 'lucide-react';

export default function Automations() {
  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Flow Builder</h1>
          <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Visual workflow automation.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" style={{ backgroundColor: 'var(--sys-color-surface-container-highest)' }}>Save Draft</button>
          <button className="btn-primary"><Play size={18} /> Publish Flow</button>
        </div>
      </header>

      <div className="panel-low" style={{ padding: '48px', position: 'relative', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', backgroundImage: 'radial-gradient(var(--sys-color-surface-container-high) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
         
         {/* Node 1 */}
         <div className="card-lowest" style={{ width: '280px', padding: '24px', zIndex: 10 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
             <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--sys-color-primary-container)' }}>
               <Target size={20} color="var(--sys-color-primary)" />
             </div>
             <div>
               <div className="label-sm">Trigger</div>
               <div style={{ fontWeight: 600 }}>New Lead Captured</div>
             </div>
           </div>
           <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)' }}>
             Fires when a user submits the signup form.
           </div>
         </div>

         {/* Connector */}
         <div style={{ width: '4px', height: '40px', backgroundColor: 'var(--sys-color-primary)', borderRadius: '2px', opacity: 0.5 }}></div>

         {/* Arrow Down Placeholder */}
         <div style={{ marginTop: '-40px', zIndex: 1, padding: '10px 0' }}>
            <ArrowRight size={24} color="var(--sys-color-primary)" style={{ transform: 'rotate(90deg)' }} />
         </div>

         {/* Node 2 */}
         <div className="card-lowest" style={{ width: '280px', padding: '24px', zIndex: 10 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
             <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--sys-color-secondary-container)' }}>
               <Zap size={20} color="var(--sys-color-primary)" />
             </div>
             <div>
               <div className="label-sm">Action</div>
               <div style={{ fontWeight: 600 }}>Calculate Lead Score</div>
             </div>
           </div>
           <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)' }}>
             AI evaluates lead quality based on input.
           </div>
         </div>

         {/* Connector */}
         <div style={{ width: '4px', height: '40px', backgroundColor: 'var(--sys-color-primary)', borderRadius: '2px', opacity: 0.5 }}></div>

         {/* Arrow Down Placeholder */}
         <div style={{ marginTop: '-40px', zIndex: 1, padding: '10px 0' }}>
            <ArrowRight size={24} color="var(--sys-color-primary)" style={{ transform: 'rotate(90deg)' }} />
         </div>

         {/* Node 3 */}
         <div className="card-lowest" style={{ width: '280px', padding: '24px', zIndex: 10 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
             <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--sys-color-tertiary-container)', opacity: 0.8 }}>
               <Mail size={20} color="var(--sys-color-tertiary)" />
             </div>
             <div>
               <div className="label-sm">Action</div>
               <div style={{ fontWeight: 600 }}>Send Welcome Email</div>
             </div>
           </div>
           <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)' }}>
             Template: standard-onboarding-v2
           </div>
         </div>

         <button className="btn-secondary" style={{ width: '60px', height: '60px', borderRadius: '50%', padding: 0 }}>
            <Plus size={24} />
         </button>

      </div>
    </div>
  );
}
