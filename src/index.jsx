import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/inter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Router from './components/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);