import { EventEmitter } from "@angular/core";
import { Product } from "./product.model";


export class ProductListService{

  productSelectedEvent = new EventEmitter<Product>();


    getproducts(){
        return this.products.slice();

    }

    product

    products: Product []=[
        new Product(
          'Nokia',
          'Best Phone in Market',
          'data:image/jpeg;base64,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',
          1000.00,
          'NOKIA'
        ),
        new Product(
          'Apple',
          'Experience the brand of APPLE & APPLE MAC',
          'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177751-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDJlLzk4OTA0ODYxOTAxMTAuanBnfDFjNWU5ZDM5YjE4MmJlYjBkNzYzNjAxNDkxOGU2ZmQ3MzlkNWViYjFmYmI4M2ZmNTNmN2ZmMjc5NzgxNWRmYTE',
          40000.00,
          'APPLE'
        )
    ]
}