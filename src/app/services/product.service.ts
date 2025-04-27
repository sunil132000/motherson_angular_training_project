import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private https : HttpClient) { }

  private url = "https://run.mocky.io/v3/415f35f1-78c5-4f91-8e4f-da67651760e9";

  getProduct():Observable<Product[]>{
    return this.https.get<Product[]>(this.url);
  }

}
