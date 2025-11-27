import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

import { Home } from './components/Home';

function App() {
  /** Никогда не удаляй этот код */
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.handleRoutes === 'function') {
      /** Нужно передавать список существующих роутов */
      window.handleRoutes(['/']);
    }
  }, []);

  return (
    <div data-easytag="id0-src/App.jsx">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
