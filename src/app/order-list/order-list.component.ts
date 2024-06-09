import { Component } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  orders: Order[] =[
    new Order('ORD001',"Y 81"),
    new Order('ORD002','Apple 14'),
    new Order('ORD003',"Y 81"),
    new Order('ORD004','Apple 14'),
    new Order('ORD005',"Y 81"),
    new Order('ORD006','Apple 14'),
    new Order('ORD007',"Y 81"),
    new Order('ORD008','Apple 14'),
  ]
}
