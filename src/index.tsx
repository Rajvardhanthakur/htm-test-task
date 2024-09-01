import React from 'react';
import ReactDOM from 'react-dom/client';
import { App as Apps } from './App';
import "./app.css"

const App: React.FC = () => {
  return <Apps />
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure 'root' exists in your HTML.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
