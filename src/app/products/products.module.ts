import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { BookingComponent } from './booking/booking.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    ViewProductComponent,
    BookingComponent,
    FilterPipe,
    AddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
   ReactiveFormsModule,
   NgxPayPalModule
  ]
})
export class ProductsModule { }
