import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOrderListComponent } from './components/delivery-order-list/delivery-order-list.component';
import { DeliveryOrderRoutingModule } from './delivery-order-routing.module';
import { NewDeliveryOrderComponent } from './components/new-delivery-order/new-delivery-order.component';

@NgModule({
  declarations: [DeliveryOrderListComponent, NewDeliveryOrderComponent],
  imports: [
    CommonModule,DeliveryOrderRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class DeliveryOrderModule { }
