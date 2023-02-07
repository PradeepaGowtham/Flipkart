import React from 'react';
import Navbar from './pages/navbar';
import Header from './pages/header';
import Button from './pages/button';
import ProductsList from './components/mainpage/productslist';
import { Route, Routes } from "react-router-dom";

import AddProduct from './components/mainpage/addproduct';

const App = () => {
  return (
    <React.Fragment>
  
      <Navbar />
      <Header />
      <ProductsList/>
      <Button />
    <Routes>
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
    </React.Fragment>
   
  )
}

export default App;