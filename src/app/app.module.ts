import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { SpecificationDialogComponent } from './components/product-detail/specification-dialog/specification-dialog.component';
import { ReviewDialogComponent } from './components/product-detail/review-dialog/review-dialog.component';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LogOutPageComponent } from './components/log-out-page/log-out-page.component';
import { NotifyMePageComponent } from './components/notify-me-page/notify-me-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartComponent,
    SpecificationDialogComponent,
    ReviewDialogComponent,
    LandingComponent,
    HeaderComponent,
    NotFoundPageComponent,
    LogOutPageComponent,
    NotifyMePageComponent,
    CheckoutPageComponent,
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
