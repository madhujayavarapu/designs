import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/modules';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: AddProductComponent}
    ])
  ]
})
export class AddProductModule { }
