import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { BookingComponent } from './booking/booking.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  { path: '', component:AllProductsComponent },
  {
    path:'viewproduct/:productId',component:ViewProductComponent
  }
  ,
  {
    path:'booking/:productId',component:BookingComponent
  },
  {
    path:'',component:AddComponent
  }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
