import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: CartItem[] = [];
  
  constructor(
    private cartService: CartService
  ) {}
  
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.products = items;
      console.log("Products in cart:", this.products);
    });
  }
  
  getSubtotal(): number {
    return this.products.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  increaseQuantity(item: CartItem): void {
    item.quantity++;
    // Update cart service if needed
  }
  
  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      // Update cart service if needed
    }
  }
  
  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
  }
}