import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import{ DiscountService } from './services/Discount.service';
import { MemberService } from './services/member.service';
import { ProductService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { Regis2Component } from './regis2/regis2.component';
import { Regis3Component } from './regis3/regis3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiscountComponent } from './discount/discount.component';
import { EditDistComponent } from './edit-dist/edit-dist.component';
import { AddDistComponent } from './add-dist/add-dist.component';
import { DistDetailsComponent } from './dist-details/dist-details.component';
import { MembersComponent } from './members/members.component';
import { ProductsComponent } from './products/products.component';
import { MemDetailsComponent } from './mem-details/mem-details.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { AddSectComponent } from './add-sect/add-sect.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { TagDetailsComponent } from './tag-details/tag-details.component';
import { AddProComponent } from './add-pro/add-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisComponent,
    Regis2Component,
    Regis3Component,
    DashboardComponent,
    NavbarComponent,
    DiscountComponent,
    EditDistComponent,
    AddDistComponent,
    DistDetailsComponent,
    MembersComponent,
    ProductsComponent,
    MemDetailsComponent,
    ProDetailsComponent,
    AddSectComponent,
    AddTagComponent,
    TagDetailsComponent,
    AddProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'business'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    DiscountService,
    AuthService,
    MemberService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
