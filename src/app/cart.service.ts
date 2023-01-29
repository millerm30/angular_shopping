import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  private cartItemsSubject = new Subject<Product[]>();
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    const storedItems = localStorage.getItem('cartItems');
    this.items = storedItems ? JSON.parse(storedItems) : [];
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  addToCart(product: Product) {
    this.items.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.cartItemsSubject.next(this.items);
  }

  deleteCartItem(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.cartItemsSubject.next(this.items);
    this.toastr.warning('Your product has been removed from the cart!');
  }

  getItems() {
    return this.items;
  }

  getCartItemsSubject() {
    return this.cartItemsSubject;
  }
  
  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems');
    this.cartItemsSubject.next(this.items);
    return this.items;
  }
}
