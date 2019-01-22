import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component ({
   selector: 'product-search',
   templateUrl: './product-search.component.html'
})

export class ProductSearchComponent {
    search: FormGroup;
    product: Product;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.productService.searchProduct(this.search.value.name)
                   .subscribe(data => { this.product = data; });
   }
}
