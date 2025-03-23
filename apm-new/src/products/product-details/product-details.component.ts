import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products';
import { CommonModule } from '@angular/common';


@Component({
  // selector: 'pm-product-details', // as this is a routing component, we don't need a selector
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit{
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined
  // product: IProduct | undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=`: ${id}`;
    this.route.queryParams.subscribe(params => {
      this.product = {
        productId: +params['productId'],
        productName: params['productName'],
        productCode: params['productCode'],
        releaseDate: params['releaseDate'],
        description: '',
        price: +params['price'],
        imageUrl: params['imageUrl'],
        starRating: +params['starRating'],
        id: undefined
      };
      console.log('logging:'+this.product.productId);
    });
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }

}