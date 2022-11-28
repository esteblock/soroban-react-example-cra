import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import MySorobanReactProvider from './components/MySorobanReactProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MySorobanReactProvider>
      <App/>
    </MySorobanReactProvider>
  </React.StrictMode>
);
