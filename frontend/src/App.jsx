import React, { useState, useEffect } from 'react';
import JoeyAvatar from './components/JoeyAvatar';
import HomeScreen from './components/HomeScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('home');

  useEffect(() => {
    // Simulate app loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <h1 className="logo-title">
              <span className="logo-ai">AI</span>
              <span className="logo-joe">JOE</span>
            </h1>
            <p className="logo-subtitle">HELLO</p>
            <div className="paw-print">🐾</div>
            <p className="loading-text">LOADING...</p>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;
