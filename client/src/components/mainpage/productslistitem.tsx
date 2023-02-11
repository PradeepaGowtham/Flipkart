import React from "react";
import './productlistitem.css';
import { ProductsListProps,DiscountType,Seller,Discount} from "./interface";




const ProductsListItem = ({name,description,seller,imageUrl,amount}:ProductsListProps)  =>{
    return(
     <div>
        
        <div className="container">
       
             <div className="productDetails">
               <div><img src={imageUrl} alt="Hair Accessories" className="image"/></div>
               <div className="section1">
                 <h3 className="name">{name}</h3>
                
                <p className="description">{description}</p>
                <div className="seller">Seller:{seller.name}</div>
                </div>
             </div>
             <div className="section2">
               <h5 className="priceDetails">PRICE DETAILS</h5>
               <h6 className="price">Price:{amount}</h6>
             </div>
        </div>    
   
   </div>
    )
   
}
export default ProductsListItem;