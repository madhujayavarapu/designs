import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridListComponent } from './product-grid-list/product-grid-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [ProductGridListComponent, ProductCardComponent, AddProductComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    ProductGridListComponent,
    ProductCardComponent
  ]
})
export class ProductsModule { }
