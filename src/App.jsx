import React from 'react';
import Scene from './components/Scene';
import { APP_CONFIG } from './config';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Title Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '16px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
        pointerEvents: 'none'
      }}>
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
          {APP_CONFIG.name}
        </h1>
        <p style={{ color: '#d1d5db', fontSize: '14px', margin: 0 }}>
          Version {APP_CONFIG.version}
        </p>
      </div>

      {/* 3D Scene - Full Screen */}
      <div style={{ width: '100%', height: '100%' }}>
        <Scene />
      </div>

      {/* Info Panel - Bottom Right */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #4b5563',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)'
      }}>
        <div style={{ color: 'white', fontSize: '14px' }}>
          <p style={{ fontWeight: 600, marginBottom: '8px' }}>Controls:</p>
          <p style={{ color: '#d1d5db', margin: '4px 0' }}>🖱️ Left Click + Drag: Rotate</p>
          <p style={{ color: '#d1d5db', margin: '4px 0' }}>🖱️ Right Click + Drag: Pan</p>
          <p style={{ color: '#d1d5db', margin: '4px 0' }}>🖱️ Scroll: Zoom</p>
        </div>
      </div>
    </div>
  );
}

export default App;