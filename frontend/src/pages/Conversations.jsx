import React from 'react';
import { Send, MoreVertical, Phone, Video } from 'lucide-react';

export default function Conversations() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem' }}>Conversations</h1>
        <p className="text-sm" style={{ color: 'var(--sys-color-on-surface-variant)' }}>Manage all incoming messages from leads.</p>
      </header>

      <div style={{ flex: 1, display: 'flex', gap: '24px', overflow: 'hidden' }}>
        {/* Thread List */}
        <div className="panel-low" style={{ width: '320px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
           <input className="modern-input" placeholder="Search conversations..." />
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
             {[
               { id: 1, name: 'Alice Smith', message: 'I have a question about pricing.', time: '10m', unread: true },
               { id: 2, name: 'Bob Johnson', message: 'Thanks for the update!', time: '1h', unread: false },
               { id: 3, name: 'Charlie Davis', message: 'Can we schedule a demo?', time: '3h', unread: false },
             ].map((thread) => (
               <div key={thread.id} className="card-lowest" style={{ padding: '16px', cursor: 'pointer', borderLeft: thread.unread ? '4px solid var(--sys-color-primary)' : '4px solid transparent' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                   <div style={{ fontWeight: 600 }}>{thread.name}</div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)' }}>{thread.time}</div>
                 </div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-on-surface-variant)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                   {thread.message}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Active Chat */}
        <div className="panel-low" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--sys-color-surface-container-high)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--sys-color-surface-container-highest)' }}></div>
               <div>
                 <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>Alice Smith</div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--sys-color-primary)' }}>Online</div>
               </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--sys-color-secondary)' }}>
              <Phone size={24} />
              <Video size={24} />
              <MoreVertical size={24} />
            </div>
          </div>
          
          <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '75%', padding: '16px', borderRadius: '0 16px 16px 16px', backgroundColor: 'var(--sys-color-surface-container-highest)' }}>
              Hi there! I was looking at your plans and I have a question about pricing.
              <div style={{ fontSize: '0.75rem', color: 'var(--sys-color-secondary)', marginTop: '8px', textAlign: 'right' }}>10:45 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-end', maxWidth: '75%', padding: '16px', borderRadius: '16px 0 16px 16px', backgroundColor: 'var(--sys-color-primary-container)', color: 'var(--sys-color-on-primary-container)' }}>
              Hello Alice! Of course, I'd be happy to help. What specific questions do you have?
              <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '8px', textAlign: 'right' }}>10:48 AM</div>
            </div>
          </div>
          
          <div style={{ padding: '24px', borderTop: '1px solid var(--sys-color-surface-container-high)' }}>
             <div className="input-with-icon" style={{ display: 'flex', gap: '16px' }}>
               <input className="modern-input" style={{ flex: 1 }} placeholder="Type your message..." />
               <button className="btn-primary" style={{ width: 'auto' }}>
                 <Send size={18} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
