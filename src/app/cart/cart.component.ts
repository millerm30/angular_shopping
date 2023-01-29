import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  goBack(): void {
    window.history.back();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(product: any): void {
    this.cartService.deleteCartItem(product);
  }

  calculateTotal(): number {
    let total: number = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    return total;
  }
}
