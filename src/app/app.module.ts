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

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartComponent,
    SpecificationDialogComponent,
    ReviewDialogComponent,
    LandingComponent,
    HeaderComponent,
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
