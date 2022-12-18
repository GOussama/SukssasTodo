import { DeliveryOrderListComponent } from './delivery-order/delivery-order-list/delivery-order-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'delivery_orders',
    loadChildren: () => import('./delivery-order/delivery-order.module').then(m => m.DeliveryOrderModule)
  },
  { path: '', redirectTo: 'delivery_orders', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
