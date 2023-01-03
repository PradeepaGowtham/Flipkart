import React from 'react';
import Navbar from './pages/navbar';
import Header from './pages/header';
import ProductsList from './components/mainpage/productslist';


const App = () => {
  return (
    <React.Fragment>
    <>
      <Navbar />
      <ProductsList/>
      <Header />
    </>
    </React.Fragment>
  )
}

export default App;