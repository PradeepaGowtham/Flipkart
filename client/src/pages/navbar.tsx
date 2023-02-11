import React from "react";
import {FaSearch} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  
    return(
    
        <>
       <div className="navbar">
        <div className="navbarFirst">
          <img className="flipkartimg" src="./images/flipkartimg.png" alt="flipkart" />
          <p>
            Explore
            <span className="plus">Plus</span>
            <img className="plusimg" src="./images/plusimg.png" alt="plus" />
          </p>
          </div>
         <div className="navbarSecond">
            <input type="text" placeholder="Search for products,brands and more"/>
            <FaSearch className="search"/>
         </div>
         <div className="navbarThird">
            <NavLink className="nav-link" to="/addproduct">Add Product</NavLink>
                
        </div>
         </div>
</>
)
}
export default Navbar; 