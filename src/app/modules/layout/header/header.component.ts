import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartDrawerState: boolean;

  constructor(
    private appState: AppStateService
  ) { }

  ngOnInit() {
    this.cartDrawerState = this.appState.getCartDrawerState();
    this.appState.showCartDraweRef.subscribe(state => this.cartDrawerState = state);
  }

  openCart() {
    console.log("openCart");
    this.appState.setCartDrawerState(!this.cartDrawerState);
  }
}
