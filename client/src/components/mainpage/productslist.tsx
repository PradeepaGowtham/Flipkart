import React from "react";
import ProductsListItem from "./productslistitem";
import { DiscountType, ProductsListProps} from "./interface";

import './productlist.css';

const ProductsList = () =>{ 
    
  const productsListInfo:ProductsListProps[] = [
    {
        id:"1",
        name: "Hair Dryer",
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/ju79hu80/hair-dryer-refurbished/c/p/e/c-hp8100-46-philips-original-imaf8dvrv4zekkgt.jpeg?q=70",
        description: "Philips is a Dutch multinational technology company headquartered in Amsterdam, one of the largest electronics companies in the world",
        seller: {id:"1",
          name:"MythongloryRetail",
          ifFlipkartAssured: true,
        },
        amount: 350,
        discount: {
         type : DiscountType.PERCENTAGE,       
         value: 550,
        },
         noOfStocksAvailable: 5,
      },
      {
        id:"2",
        name: "Hair ironer",
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/k6jnfrk0/hair-straightener/h/j/q/samrat-hair-straitner-original-imafm24a5eabautb.jpeg?q=70",
        description: "Philips is a Dutch multinational technology company headquartered in Amsterdam, one of the largest electronics companies in the world",
        seller: {id:"1",
          name:"MythongloryRetail",
          ifFlipkartAssured: true,
        },
        amount: 550,
        discount: {
         type : DiscountType.PERCENTAGE,            
         
         value: 550,
        },
         noOfStocksAvailable: 5,
      },
      {
      id:"3",
        name: "Hair serum",
        imageUrl:"https://rukminim1.flixcart.com/image/612/612/kebpqq80/hair-serum/z/7/e/275-2-extraordinary-oil-serum-100-ml-l-oreal-paris-original-imafvygbngz3wgtm.jpeg?q=70",
        description: "Philips is a Dutch multinational technology company headquartered in Amsterdam, one of the largest electronics companies in the world",
        seller: {id:"1",
          name:"MythongloryRetail",
          ifFlipkartAssured: true,
        },
        amount: 400,
        discount: {
         type : DiscountType.PERCENTAGE,            
         
         value: 550,
        },
         noOfStocksAvailable: 5,
      },
    
] 
  return(    
      
             <div className="productList">
               
                {productsListInfo.map(({...otherProductsListInfoProps})=>(
                  <ProductsListItem  {...otherProductsListInfoProps}/>
                ))}
               
              
             </div>
            
   )
 
   }
  
 export default ProductsList;


