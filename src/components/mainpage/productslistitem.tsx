import React from "react";
import './productlistitem.css';
import { ProductsListProps,DiscountType,Seller,Discount} from "./interface";

const ProductsListItem = ({name,description,seller,imageUrl}:ProductsListProps)  =>{
    return(
     

        <div className="container">
             <div className="productDetails">
               <div><img src={imageUrl} alt="Hair Accessories" className="image"/></div>
               <div className="section">
                 <h3 className="name">{name}</h3>
                
                <p className="description">{description}</p>
                <div className="seller">Seller:{seller.name}</div>
                </div>
             </div>
             <div className="priceDetails">PRICE DETAILS</div>
             <div className="price">price</div>
            
        </div>    
   
    
    )
   
}
export default ProductsListItem;