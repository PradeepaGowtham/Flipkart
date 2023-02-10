import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './pages/navbar';
import Header from './pages/header';

import Button from './pages/button';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  
    <Navbar />
    <Header />
    <App />
    <Button />
    
  </React.StrictMode>,
)


