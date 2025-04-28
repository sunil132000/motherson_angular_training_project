import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SpecificationDialogComponent } from './components/product-detail/specification-dialog/specification-dialog.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LogOutPageComponent } from './components/log-out-page/log-out-page.component';
import { NotifyMePageComponent } from './components/notify-me-page/notify-me-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  {path:"" , component:LandingComponent},
  {path:"products" , component:ProductDetailComponent},
  {path:"product-detail/:id" , component:SpecificationDialogComponent },
  {path:"cart", component:CartComponent},
  {path:"logOut",component:LogOutPageComponent},
  {path:"notifyMe", component:NotifyMePageComponent},
  { path: 'checkout', component: CheckoutPageComponent },
  {path:"**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
