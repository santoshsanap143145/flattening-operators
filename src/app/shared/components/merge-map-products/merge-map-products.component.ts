import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Ipost } from '../../models/post.model';
import { Iproduct } from '../../models/product.model';
import { from, map, mergeMap, pipe, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map-products',
  templateUrl: './merge-map-products.component.html',
  styleUrls: ['./merge-map-products.component.scss'],
})
export class MergeMapProductsComponent implements OnInit {
  productArr: Array<Iproduct> = [];
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  // fetchAllProducts() {
  //   this._productService.getAllProducts().subscribe((products) => {
  //     // console.log(products);
  //     products.forEach((prod) => {
  //       this._productService.getReviewsById(prod.id).subscribe((post) => {
  //         // console.log(prod, post);
  //         let obj = {
  //           ...prod,
  //           review: post.title
  //         }
  //         this.productArr.push(obj)
  //         console.log(this.productArr);

  //       });
  //     });
  //   });
  // }

  fetchAllProducts() {
    this._productService
      .getAllProducts()
      .pipe(
        mergeMap((products) => {
          return from(products);
        }),
        mergeMap((product: any) => {
          return this._productService.getReviewsById(product.id).pipe(
            map((post: any) => {
              return {
                ...product,
                reviews: post.title,
              };
            })
          );
        }),
        toArray()
      )

      .subscribe((res) => {
        console.log(res);
        this.productArr = res
      });
  }
}
