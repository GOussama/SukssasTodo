import { DeliveryOrderService } from './../../services/delivery-order.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-delivery-order',
  templateUrl: './new-delivery-order.component.html',
  styleUrls: ['./new-delivery-order.component.scss']
})
export class NewDeliveryOrderComponent implements OnInit {

  constructor(private deliveryOrderService : DeliveryOrderService) { }

  deliveryOrderForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onCreateDeliveryOrder() : void {
    this.deliveryOrderService.createDeliveryOrders(this.deliveryOrderForm.getRawValue()).subscribe(response => console.log(response))
    window.location.reload();
  }

  ngOnInit() {
  }

}
