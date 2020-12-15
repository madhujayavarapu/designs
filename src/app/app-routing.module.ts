import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'products', loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)},
  {path: 'product-detail/:id',
  loadChildren: () => import('./pages/product-detail-page/product-detail-page.module').then(m => m.ProductDetailPageModule)},
  {path: 'add-product', loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductModule)},
  {path: 'order-tracking', loadChildren: () => import('./pages/order-tracking/order-tracking.module').then(m => m.OrderTrackingModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
