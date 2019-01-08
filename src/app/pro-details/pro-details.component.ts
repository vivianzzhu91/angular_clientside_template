import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {

  id: string;
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get discount
    this.productService.getProduct(this.id).subscribe(product => {
      this.product = product;
      // console.log(this.discount);
    });
  }

}
