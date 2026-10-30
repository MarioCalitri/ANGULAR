import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product'

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.component.css',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  product = input<Product>();

  added = output<Product>();
  
  addToCart() {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }
}
