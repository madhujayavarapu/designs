import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  showCartDrawer: boolean = false;
  showCartDraweRef = new BehaviorSubject<boolean>(this.showCartDrawer);

  constructor() { }

  setCartDrawerState(state: boolean) {
    this.showCartDrawer = state;
    this.showCartDraweRef.next(this.showCartDrawer);
  }

  getCartDrawerState() {
    return this.showCartDrawer;
  }
}
