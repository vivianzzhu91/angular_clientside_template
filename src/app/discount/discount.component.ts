import { Component, OnInit } from '@angular/core';
import {DiscountService} from '../services/Discount.service';

import {Discount} from '../models/Discount';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  discounts: Discount[];
  loaded: boolean = false;
  constructor(private DiscountService: DiscountService) { }

  ngOnInit() {

    setTimeout(() => {
      this.DiscountService.getDiscounts().subscribe(discounts=>{
        this.discounts = discounts;
        // console.log(this.discounts.length);
      });
      this.loaded = true;
    }, 2000);
    
  }

}
