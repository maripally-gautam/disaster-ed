import React from 'react';
import { useNavigate } from 'react-router-dom';

const FireBlanketTraining = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    // Update this path as needed for the next step in your module
    navigate('/disaster-learning-modules/FireSafetyDosDonts');
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '32px 32px 80px 32px',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/assets/images/image4.png"
          alt="Using a Fire Blanket"
          style={{
            width: '100%',
            maxWidth: 500,
            height: 'auto',
            borderRadius: 12,
            marginBottom: 32,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
          }}
        />
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#d32f2f' }}>
          How to Use a Fire Blanket <span role="img" aria-label="fire">🔥</span>
        </h2>
        <div style={{ textAlign: 'left', width: '100%', maxWidth: 500 }}>
          <ol style={{ fontSize: 20, lineHeight: 1.7, paddingLeft: 24 }}>
            <li><strong>Get a Fire Blanket:</strong> It's a special blanket for fires.</li>
            <li><strong>Put it on the Fire:</strong> Carefully place it over the flames to cover them completely.</li>
            <li><strong>It Works by:</strong> Taking away the air so the fire goes out.</li>
            <li><strong>Stay Safe:</strong> Use it only on small fires and never throw it.</li>
          </ol>
        </div>
      </div>
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          bottom: 24,
          right: 32,
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: 18,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default FireBlanketTraining;
