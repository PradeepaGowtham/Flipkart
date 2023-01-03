import React from "react";
import ProductsListItem from "./productslistitem";
import { DiscountType, ProductsListProps} from "./interface";
import './productlist.css';

const ProductsList = () =>{ 

  const productsListInfo:ProductsListProps[] = [
    {
        id:"1",
        name: "Hair Dryer",
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
      id:"3",
        name: "Hair serum",
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
      {id:"1",
        name: "Hair Dryer",
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
      }
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


