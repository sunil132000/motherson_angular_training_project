// product.model.ts

export interface Product {
    id: number;
    product_image: string;
    product_name: string;
    product_price: string;
    quantity: number;
    availability: string;
    color: string;
    size: string;
    weight: string;
    customer_reviews: CustomerReview[];
    gender: string;
    category: string;
  }
  
  export interface CustomerReview {
    rating: number;
    comment: string;
  }
  