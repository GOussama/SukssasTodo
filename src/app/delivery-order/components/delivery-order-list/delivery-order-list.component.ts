import { DeliveryOrderService } from './../../services/delivery-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-order-list',
  templateUrl: './delivery-order-list.component.html',
  styleUrls: ['./delivery-order-list.component.scss']
})
export class DeliveryOrderListComponent implements OnInit {

  deliveryOrders : DeliveryOrder[]
  constructor(private deliveryOrderService : DeliveryOrderService) {}

  ngOnInit() {
    this.deliveryOrderService.getDeliveryOrders().subscribe(response => {
      this.deliveryOrders = response
    })
  }

}
