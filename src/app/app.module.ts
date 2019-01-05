import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { Regis2Component } from './regis2/regis2.component';
import { Regis3Component } from './regis3/regis3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisComponent,
    Regis2Component,
    Regis3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
