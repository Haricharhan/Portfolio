import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init({
  offset: 40,
  once: true,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});
