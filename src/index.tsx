import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app.css"

const App: React.FC = () => {
  return <h1 className='text-primary text-4xl font-bold'>Hello, world!</h1>;
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure 'root' exists in your HTML.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
