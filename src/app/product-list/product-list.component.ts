import { EventEmitter } from '@angular/core';
import { Component, Output, Input } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product, } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[];//Declaration
  

 // @Output() productSelectedParent = new EventEmitter<Product>;


  constructor(private productListService: ProductListService){
    
  }

  ngOnInit(){
    this.products = this.productListService.getproducts();
  }
  

}
