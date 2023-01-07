

export enum DiscountType {
    PERCENTAGE = "PERCENTAGE",
    FLAT = "FLAT",
  }
  
  export interface Seller {
    id: string;
    name: string;
    ifFlipkartAssured: boolean;
  }
  
  export interface Discount {
    type: DiscountType;
    value: number;
  }
  
 export interface ProductsListProps {
    id: string;
    name: string;
    imageUrl:string;
    description: string;
    seller: Seller;
    amount: number;
    discount: Discount;
    noOfStocksAvailable: number;
  }

  