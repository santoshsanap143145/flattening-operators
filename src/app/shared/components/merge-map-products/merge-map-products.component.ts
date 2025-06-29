import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-merge-map-products',
  templateUrl: './merge-map-products.component.html',
  styleUrls: ['./merge-map-products.component.scss']
})
export class MergeMapProductsComponent implements OnInit {

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
  }

}
