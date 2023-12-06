import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountComponent } from './components/pages/account/account.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'products',
    component: ProductComponent
  },
  {
    path:'productDetails',
    component: ProductDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
