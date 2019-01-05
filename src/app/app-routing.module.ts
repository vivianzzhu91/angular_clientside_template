import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { Regis2Component } from './regis2/regis2.component';
import { Regis3Component } from './regis3/regis3.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'regis', component: RegisComponent },
  { path: 'regis2', component: Regis2Component },
  { path: 'regis3', component: Regis3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
