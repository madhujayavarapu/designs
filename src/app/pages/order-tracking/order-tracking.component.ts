import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/constants';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent implements OnInit {
  products: IProduct[] = Products.slice(0, 3);
  displayedColumns = ['image', 'name', 'qty', 'price'];

  constructor() { }

  ngOnInit() {
  }

}
