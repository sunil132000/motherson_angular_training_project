import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart.model';

@Component({
  selector: 'app-specification-dialog',
  templateUrl: './specification-dialog.component.html',
  styleUrls: ['./specification-dialog.component.css']  // Make sure this is correct
})

export class SpecificationDialogComponent implements OnInit {

  product:Product[]=[];
   productId!: string | null; 
  constructor(
    private route: ActivatedRoute,  
    private productService: ProductService  ,
    private cartService: CartService  
  ) {}

  ngOnInit(): void {
     this.productId = this.route.snapshot.paramMap.get('id');
     console.log(this.productId);
     this.getProductdetail()
  }

  getProductdetail(){
    this.productService.getProduct().subscribe((data:Product[])=>{
      console.log("spec",data);
     this.product = data.filter(item=>{
      return item.id === Number(this.productId); 
     })
    })
  }
  addToCart() {
    if (this.product.length > 0) {
      const productToAdd: CartItem = {
        id: this.product[0].id,
        name: this.product[0].product_name,
        price: parseFloat(this.product[0].product_price),
        quantity: 1, // You can modify this if you want quantity selector logic
        image: this.product[0].product_image
      };

      // Call CartService to add the product
      this.cartService.addToCart(productToAdd);
      console.log('Product added to cart:', productToAdd);
    }
  }
}
