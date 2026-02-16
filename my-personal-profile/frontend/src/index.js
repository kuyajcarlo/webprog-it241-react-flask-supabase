import React from 'react';
import ReactDOM from 'react-dom/client';
import Guestbook from './guestbook'; // Imports your Guestbook component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Guestbook />
  </React.StrictMode>
);