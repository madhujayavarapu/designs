import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTrackingComponent } from './order-tracking.component';
import { CoreModule } from 'src/app/modules';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderTrackingComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: OrderTrackingComponent}
    ])
  ]
})
export class OrderTrackingModule { }
