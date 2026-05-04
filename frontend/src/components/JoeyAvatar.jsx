import React, { useState, useEffect } from 'react';
import './JoeyAvatar.css';

const JoeyAvatar = ({ isSpeak = true }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTailWagging, setIsTailWagging] = useState(true);
  const [expression, setExpression] = useState('happy');

  useEffect(() => {
    // Tail wagging animation
    if (isTailWagging) {
      const interval = setInterval(() => {
        setIsSpeaking(prev => !prev);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isTailWagging]);

  const getJoeyExpression = () => {
    const expressions = {
      happy: '😊',
      listening: '👂',
      thinking: '🤔',
      excited: '🤩',
      friendly: '😊'
    };
    return expressions[expression] || expressions.happy;
  };

  return (
    <div className="joey-avatar-wrapper">
      <style>{`
        @keyframes tailWag {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        
        @keyframes mouthOpen {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.8); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .joey-tail {
          animation: ${isSpeaking ? 'tailWag 0.6s infinite' : 'none'};
        }

        .joey-mouth {
          animation: ${isSpeaking ? 'mouthOpen 0.5s infinite' : 'none'};
        }

        .joey-eyes {
          animation: ${isSpeaking ? 'blink 2s infinite' : 'none'};
        }
      `}</style>

      <div className="joey-avatar-container">
        {/* Main Avatar Image */}
        <img 
          src="/assets/joey-avatar/joey-main.png" 
          alt="Joey - Boston Terrier AI"
          className="joey-image"
        />

        {/* Animation Overlays */}
        <div className="joey-animations">
          {/* Mouth Animation */}
          <div className="joey-mouth" style={{ fontSize: '40px' }}>
            {isSpeaking ? '😊' : '😊'}
          </div>

          {/* Tail Animation */}
          <div className="joey-tail" style={{ fontSize: '30px' }}>
            🐕
          </div>

          {/* Eyes Expression */}
          <div className="joey-eyes" style={{ fontSize: '20px' }}>
            ✨
          </div>
        </div>

        {/* Speaking Indicator */}
        {isSpeaking && (
          <div className="speaking-indicator">
            <div className="sound-line"></div>
            <div className="sound-line"></div>
            <div className="sound-line"></div>
          </div>
        )}
      </div>

      {/* Expression Display */}
      <div className="expression-display">
        <span>{getJoeyExpression()}</span>
      </div>
    </div>
  );
};

export default JoeyAvatar;
