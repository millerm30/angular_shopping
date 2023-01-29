import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(
    private http: HttpClient
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
  }

  deleteCartItem(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems');
    return this.items;
  }
}
