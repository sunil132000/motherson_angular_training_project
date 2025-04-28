import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService){}
  cartItemCount:number =0;
  ngOnInit() {
    this.cartService.getCartItems().subscribe((cartItems: CartItem[]) => {
      this.cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
