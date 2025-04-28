import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  productNames : string[]=[];
  constructor(private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['productNames']) {
        this.productNames = params['productNames'].split(','); // Split by comma to get individual product names
      }
    });
  }

}
