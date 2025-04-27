import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  constructor() { }
  addToCart(product: CartItem) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If the product already exists, update the quantity
      existingProduct.quantity += product.quantity;
    } else {
      // Otherwise, add a new product to the cart
      this.cart.push(product);
    }
    this.cartSubject.next(this.cart);
  }
  
  getCartItems() {
    return this.cartSubject.asObservable();
  }

  getCartItemCount():number{
    return this.cart.reduce((total , item )=>total+item.quantity,0);
  }
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.cartSubject.next(this.cart);
  }
  
  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
      this.cartSubject.next(this.cart);
    }
  }
}
