import React from "react";
import './header.css';


const Header = () => {
return(
    <>
        <div className="container">
        <div className="header">
             <div className="flipkart">Flipkart</div>
             <div className="grocery">Grocery</div>
        </div>
            

        <div className="address">
            <p className="first">Deliver to: Suseendiran P,637211 <button className="work">WORK</button></p>
            <p className="second">Lakshmi complex,North Car Street,Tiruchengode  <button className="change">Change</button></p>
        </div>
        </div>
    </>
)
}
export default Header;