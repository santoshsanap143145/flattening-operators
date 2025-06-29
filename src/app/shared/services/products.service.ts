import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = `https://fakestoreapi.com/products`;
  reviewUrl: string = `https://jsonplaceholder.typicode.com/posts`
  constructor(private _http: HttpClient) {}

  getAllProducts():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this.productsUrl)
  }
}
