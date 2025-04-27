import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  products : Product[]=[];
  ngOnInit(){
    this.getProductDetail();
  }

  constructor(private productService : ProductService){}

  getProductDetail(){
    this.productService.getProduct().subscribe((data:Product[])=>{
      console.log(data);
      this.products = data;
    })
  }

}
