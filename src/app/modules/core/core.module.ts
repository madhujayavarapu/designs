import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

const vendorModules = [
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...vendorModules
  ],
  exports: vendorModules
})
export class CoreModule { }
