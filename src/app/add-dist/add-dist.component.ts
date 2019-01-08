import { Component, OnInit, ViewChild } from '@angular/core';
import {Discount} from '../models/Discount';
import { FlashMessagesService } from 'angular2-flash-messages';
import {DiscountService} from '../services/Discount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dist',
  templateUrl: './add-dist.component.html',
  styleUrls: ['./add-dist.component.css']
})
export class AddDistComponent implements OnInit {

  discount: Discount ={
    name: '',
    store: '',
    time: '',
    user: '',
    rule: '',
    claimed: 0,
    used: 0
  }

  @ViewChild('distForm') form:any;

  constructor(
    private flashMessage: FlashMessagesService,
    private discountService: DiscountService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  
  onSubmit({value, valid}: {value:Discount, valid:boolean}){
    // console.log(value,valid);
    if(!valid){
      // show errors
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: "alert-danger", timeout: 4000
      });
    }
    else{
      // add discount
      this.discountService.newDist(value);
      // success message
      this.flashMessage.show('New Discount Coupon Added', {
        cssClass: "alert-success", timeout: 4000
      });
      //redirect
      this.router.navigate(['/dashboard']);
      
    }
  }

}
