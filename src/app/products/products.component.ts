import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Product} from "../models/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.getProducts().subscribe(products=>{
      this.products = products;
      // console.log(this.discounts.length);
    });
    
  }

}
