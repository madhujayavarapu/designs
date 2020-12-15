import { Component, OnInit } from '@angular/core';
import { Products, Categories } from 'src/app/constants';
import { IProduct } from 'src/app/models';
import { Options, LabelType } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products: IProduct[] = Products;
  categories: any = Categories;

  minValue = 100;
  maxValue = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> $" + value;
        case LabelType.High:
          return "<b>Max:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
