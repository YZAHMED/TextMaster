import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found');
}

// Credit in console
try {
  const style = 'color:#4f7cff;font-weight:700;';
  // eslint-disable-next-line no-console
  console.log('%cBuilt by Yaqoob Ahmed • dev.yaqoobahmed.com', style);
} catch {}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

