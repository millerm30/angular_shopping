import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  goBack(): void {
    window.history.back();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toastr.success('Your product has been added to the cart!');
  }
}
