import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule, ProductsModule } from 'src/app/modules';
import { RouterModule } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    MatCarouselModule.forRoot(),
    ProductsModule
  ]
})
export class HomeModule { }
