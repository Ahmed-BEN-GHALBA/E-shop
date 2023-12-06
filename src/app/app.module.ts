import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ProductComponent } from './components/pages/product/product.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckOutComponent } from './components/pages/check-out/check-out.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AccountComponent,
    ProductComponent,
    CartComponent,
    CheckOutComponent,
    ErrorPageComponent,
    NavBarComponent,
    FooterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
