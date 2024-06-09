import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;
 //  @Output() selectedItem = new EventEmitter<null>; service directly communication with products
 
 
 constructor(private productListService:ProductListService ){}


  onItemClicked(){
    this.productListService.productSelectedEvent.emit(this.product);
  
  }
  }
