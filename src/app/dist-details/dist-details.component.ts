import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../services/Discount.service';
import { Discount } from '../models/Discount';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dist-details',
  templateUrl: './dist-details.component.html',
  styleUrls: ['./dist-details.component.css']
})
export class DistDetailsComponent implements OnInit {

  id: string;
  discount: Discount;
  showName: boolean = false;
  showTime: boolean = false;
  showStore: boolean = false;
  showUser: boolean = false;
  showRule: boolean = false;

  constructor(
    private discountService: DiscountService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get discount
    this.discountService.getDiscount(this.id).subscribe(discount => {
      this.discount = discount;
      // console.log(this.discount);
    });
  }

  //update all related info
  updateName(){
    this.discountService.updateDiscount(this.discount);
    this.flashMessage.show('Successfully Updated',{
      cssClass:'alert-success', timeout: 4000
    })
  }
  updateTime(){
    this.discountService.updateDiscount(this.discount);
    this.flashMessage.show('Successfully Updated',{
      cssClass:'alert-success', timeout: 4000
    })
  }
  updateStore(){
    this.discountService.updateDiscount(this.discount);
    this.flashMessage.show('Successfully Updated',{
      cssClass:'alert-success', timeout: 4000
    })
  }
  updateRule(){
    this.discountService.updateDiscount(this.discount);
    this.flashMessage.show('Successfully Updated',{
      cssClass:'alert-success', timeout: 4000
    })
  }
  updateUser(){
    this.discountService.updateDiscount(this.discount);
    this.flashMessage.show('Successfully Updated',{
      cssClass:'alert-success', timeout: 4000
    });
  }

  //delete coupon
  onDelete(){
    if(confirm('Are you sure you want to delete this Discount?')){
      this.discountService.deleteDiscount(this.discount);
      this.flashMessage.show('Discount Deleted',{
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/dashboard']);
    }
  }

}
