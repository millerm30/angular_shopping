import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  itemCount: any = 0;
  private cartItemsSubscription: Subscription | null | undefined;

  constructor(private cartService: CartService) {
    this.cartItemsSubscription = null;
  }

  ngOnInit() {
    this.itemCount = this.cartService.getItems().length;
    this.cartItemsSubscription = this.cartService.getCartItemsSubject().subscribe(items => {
      this.itemCount = items.length;
    });
  }

  ngOnDestroy() {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}