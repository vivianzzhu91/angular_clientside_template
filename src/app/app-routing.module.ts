import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { Regis2Component } from './regis2/regis2.component';
import { Regis3Component } from './regis3/regis3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AddDistComponent} from './add-dist/add-dist.component';
import {DistDetailsComponent} from './dist-details/dist-details.component';
import {EditDistComponent} from './edit-dist/edit-dist.component';
import {MembersComponent} from './members/members.component';
import {DiscountComponent} from './discount/discount.component';
import {ProductsComponent} from './products/products.component';
import { MemDetailsComponent } from './mem-details/mem-details.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { AddSectComponent } from './add-sect/add-sect.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { TagDetailsComponent } from './tag-details/tag-details.component';
import { AddProComponent } from './add-pro/add-pro.component';

const routes: Routes = [
  { path: '', redirectTo: '/dist', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'regis', component: RegisComponent },
  { path: 'regis2', component: Regis2Component },
  { path: 'regis3', component: Regis3Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dist', component: DiscountComponent },
  { path: 'dist/add', component: AddDistComponent },
  { path: 'dist/:id', component: DistDetailsComponent },
  { path: 'dist/edit/:id', component: EditDistComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemDetailsComponent },
  { path: 'addTag', component: AddTagComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/:id', component: ProDetailsComponent },
  { path: 'addSect', component: AddSectComponent },
  { path: 'tagDetail', component: TagDetailsComponent },
  { path: 'prod/add', component: AddProComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
