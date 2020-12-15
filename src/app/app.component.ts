import { Component, OnInit } from '@angular/core';
import { Products } from './constants';
import { IProduct } from './models';
import { AppStateService } from './services/app-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-design';
  showCartDrawer: boolean;
  products: IProduct[] = Products;
  displayedColumns = ['image', 'name', 'qty', 'price'];

  constructor(private appState: AppStateService) {}

  ngOnInit() {
    this.showCartDrawer = this.appState.getCartDrawerState();
    this.appState.showCartDraweRef.subscribe(state => {
      this.showCartDrawer = state;
    });
  }

  closeCart() {
    this.appState.setCartDrawerState(false);
  }
}
