import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/product.model';
import { Ipost } from '../models/post.model';

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

  getReviewsById(id: number): Observable<Ipost>{
return this._http.get<Ipost>(`${this.reviewUrl}/${id}`)
  }
}
