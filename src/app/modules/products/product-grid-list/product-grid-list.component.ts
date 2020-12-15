import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent implements OnInit {
  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit() {
  }

}
