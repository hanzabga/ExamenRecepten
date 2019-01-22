import { Component } from '@angular/core';

import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
   selector: 'product-list',
   templateUrl: './product-list.component.html'
})

export class ProductListComponent  {
   products: Product[];

   constructor(private productService: ProductService) {}

   ngOnInit(): void {
       this.productService.getAllProducts().subscribe(data => this.products = data);
   }
}
