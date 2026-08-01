import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import MainProvider from './state/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainProvider>
    <App  />
  </MainProvider>
 
);

