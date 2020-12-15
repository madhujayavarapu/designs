import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailPageComponent } from './product-detail-page.component';
import { CoreModule, SharedModule } from 'src/app/modules';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductDetailPageComponent}
    ]),
    CoreModule,
    SharedModule
  ]
})
export class ProductDetailPageModule { }
