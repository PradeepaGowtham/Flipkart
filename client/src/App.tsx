import React from 'react';
import Navbar from './pages/navbar';
import Header from './pages/header';
import Button from './pages/button';
import ProductsList from './components/mainpage/productslist';


const App = () => {
  return (
    <React.Fragment>
    <>
      <Navbar />
      <Header />
      <ProductsList/>
      <Button />
    </>
    </React.Fragment>
  )
}

export default App;