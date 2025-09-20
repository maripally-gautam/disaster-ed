import React from 'react';

const FireSafetyDosDonts = () => (
  <div
    style={{
      maxWidth: 700,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '32px',
      position: 'relative',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="/assets/images/image5.png"
        alt="Fire Safety Dos and Donts"
        style={{
          width: '100%',
          maxWidth: 500,
          height: 'auto',
          borderRadius: 12,
          marginBottom: 32,
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        }}
      />
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#d32f2f' }}>
        Fire Safety: Do's & Don'ts
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 500 }}>
        <div style={{ textAlign: 'left', width: '47%' }}>
          <h3 style={{ color: "#388e3c", marginBottom: 16 }}>DO'S</h3>
          <ul style={{ fontSize: 20, lineHeight: 1.7, paddingLeft: 18, marginBottom: 0 }}>
            <li>Activate the alarm.</li>
            <li>Go to the fire exit.</li>
            <li>Turn off electricity.</li>
            <li>Use a fire extinguisher (if safe).</li>
            <li>Go to the meeting point.</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', width: '47%' }}>
          <h3 style={{ color: "#d32f2f", marginBottom: 16 }}>DON'TS</h3>
          <ul style={{ fontSize: 20, lineHeight: 1.7, paddingLeft: 18, marginBottom: 0 }}>
            <li>Don't use the elevator.</li>
            <li>Don't open hot doors.</li>
            <li>Don't hide.</li>
            <li>Don't go back for things.</li>
            <li>Don't jump.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FireSafetyDosDonts;
