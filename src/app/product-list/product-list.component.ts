import { Component } from '@angular/core';
import { products } from '../products';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  constructor(private toastr: ToastrService) {}

  share() {
    this.toastr.success('The product has been shared!');
  }

  onNotify() {
    this.toastr.info('You will be notified when the product goes on sale!');
  }
}