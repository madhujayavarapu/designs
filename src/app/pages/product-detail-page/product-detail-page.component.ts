import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/constants';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  productId: string;
  productInfo: IProduct;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.productInfo = null;
      this.productId = p.id || 'Product Name';
      const product = Products.find(p => p.name === this.productId);
      console.log("productId: ",this.productId, product);
      if(!!product) {
        this.productInfo = product;
      }
    })
  }

}
