import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { RouterModule } from '@angular/router';
import { CoreModule, ProductsModule, SharedModule } from 'src/app/modules';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductsPageComponent}
    ]),
    CoreModule,
    SharedModule,
    ProductsModule,
    NgxSliderModule
  ]
})
export class ProductsPageModule { }
