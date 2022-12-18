import { DeliveryOrderListComponent } from './components/delivery-order-list/delivery-order-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DeliveryOrderListComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryOrderRoutingModule { }
