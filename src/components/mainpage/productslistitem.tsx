import React from "react";
import './productlistitem.css';
import { ProductsListProps,DiscountType,Seller,Discount} from "./interface";

const ProductsListItem = ({name,description,seller}:ProductsListProps)  =>{
    return(
     

        <div className="container">
             <div className="productDetails">
                <h6 className="name">{name}</h6>
                <p>{description}</p>
                <h6>Seller:{seller.name}</h6>
             </div>
             <div className="priceDetails">PRICE DETAILS</div>
             <div className="price">price</div>
            
        </div>    
   
    
    )
   
}
export default ProductsListItem;