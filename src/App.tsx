import React from 'react';
import Navbar from './pages/navbar';
import ProductsList from './components/mainpage/productslist';


const App = () => {
  return (
    <React.Fragment>
    <>
      <Navbar />
      <ProductsList/>
      
    </>
    </React.Fragment>
  )
}

export default App;