import React from 'react';
import JoeyAvatar from './JoeyAvatar';
import './HomeScreen.css';

function HomeScreen() {
  const handleActionClick = (action) => {
    console.log(`${action} button clicked`);
    // Action handlers will be added here
  };

  const handleBibleVerse = () => {
    console.log('Daily Bible Verse clicked');
    // Bible verse handler will be added here
  };

  return (
    <div className="home-screen">
      {/* Header */}
      <div className="header">
        <h1 className="main-title">
          <span>AI</span>
          <span className="title-joe">JOE</span>
        </h1>
        <p className="subtitle">HELLO</p>
        <p className="tagline">YOUR AI BEST FRIEND</p>
      </div>

      {/* Avatar Container with Joey */}
      <div className="avatar-container">
        <div className="glow-ring"></div>
        <JoeyAvatar isSpeak={true} />
        
        {/* Greeting Bubble */}
        <div className="greeting-bubble">
          <p className="greeting-text">
            Hello! I'm <span className="joe-name">AIJOE</span>.
          </p>
          <div className="sound-waves">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="greeting-question">How can I help you today?</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <div className="button-row">
          <button 
            className="action-btn"
            onClick={() => handleActionClick('TALK')}
          >
            <span className="btn-icon">🎤</span>
            <span className="btn-label">TALK</span>
          </button>
          <button 
            className="action-btn"
            onClick={() => handleActionClick('SMART')}
          >
            <span className="btn-icon">🧠</span>
            <span className="btn-label">SMART</span>
          </button>
        </div>

        <div className="button-row">
          <button 
            className="action-btn"
            onClick={() => handleActionClick('GPS')}
          >
            <span className="btn-icon">📍</span>
            <span className="btn-label">GPS</span>
          </button>
          <button 
            className="action-btn"
            onClick={() => handleActionClick('PROTECT')}
          >
            <span className="btn-icon">🛡️</span>
            <span className="btn-label">PROTECT</span>
          </button>
        </div>

        <div className="button-row">
          <button 
            className="action-btn"
            onClick={() => handleActionClick('CHAT')}
          >
            <span className="btn-icon">💬</span>
            <span className="btn-label">CHAT</span>
          </button>
          <button 
            className="action-btn"
            onClick={() => handleActionClick('CARE')}
          >
            <span className="btn-icon">❤️</span>
            <span className="btn-label">CARE</span>
          </button>
        </div>
      </div>

      {/* Bible Verse Button */}
      <button 
        className="bible-verse-button"
        onClick={handleBibleVerse}
      >
        <div className="bible-icon">
          <span className="cross">✝️</span>
        </div>
        <div className="bible-content">
          <p className="bible-title">DAILY BIBLE VERSE</p>
          <p className="bible-subtitle">Tap for today's inspiration</p>
        </div>
        <span className="bible-arrow">›</span>
      </button>

      {/* Footer */}
      <div className="footer">
        <div className="paw-print-footer">🐾</div>
        <h2 className="footer-title">
          <span>AI</span>
          <span className="footer-joe">JOE</span>
        </h2>
        <p className="footer-subtitle">HELLO</p>
      </div>
    </div>
  );
}

export default HomeScreen;
