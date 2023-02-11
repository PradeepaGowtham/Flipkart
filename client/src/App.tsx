import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/mainpage/addproduct';
import ProductsList from './components/mainpage/productslist';
import Navbar from './pages/navbar';
import Header from './pages/header';  


const App = () => {
 return(
  <div>
    <Router>
   <Navbar />
  <Header />
  
  
   <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path='/addproduct' element={<AddProduct />} />
   </Routes>
   </Router>
   
   </div>
 ) 
  
}

export default App;