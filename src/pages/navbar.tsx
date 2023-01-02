import React from "react";
import {FaSearch} from 'react-icons/fa';
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
             <span>My Account</span>
         </div>
         </div>
</>
)
}
export default Navbar;