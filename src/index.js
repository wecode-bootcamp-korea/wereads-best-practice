import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/reset.scss"; 
import Main from './pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);