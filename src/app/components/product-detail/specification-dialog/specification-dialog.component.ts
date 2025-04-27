import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model';

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
    private productService: ProductService  
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
}
