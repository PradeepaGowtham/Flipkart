import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsList from './components/mainpage/productslist';

  

const App = () => {
 return(
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<ProductsList />} />
   </Routes>
   </BrowserRouter>
 ) 
  
}

export default App;