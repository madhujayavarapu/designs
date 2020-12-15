import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatGridListModule, MatCardModule, MatIconModule,
  MatRadioModule, MatDividerModule, MatInputModule, MatBadgeModule, MatTableModule, MatCheckboxModule, MatSelectModule} from '@angular/material';

const vendorModules = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatDividerModule,
  MatInputModule,
  MatBadgeModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule
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
