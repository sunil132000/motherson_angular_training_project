import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SpecificationDialogComponent } from './components/product-detail/specification-dialog/specification-dialog.component';

const routes: Routes = [
  {path:"" , component:LandingComponent},
  {path:"products" , component:ProductDetailComponent},
  {path:"product-detail/:id" , component:SpecificationDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
