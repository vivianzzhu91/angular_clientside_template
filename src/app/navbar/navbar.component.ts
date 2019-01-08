import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../services/Discount.service';
import { Discount } from '../models/Discount';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin: boolean ;
  loggedUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private discountService: DiscountService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedin = true;
        this.loggedUser = auth.email;
      }
      else{
        this.isLoggedin = false;
      }
    })
  }

  //log out
  onLogout(){
    this.authService.logout();
    this.flashMessage.show('You are now logged out',{
      cssClass: 'alert-success', timeout:4000
    });
  }

}
