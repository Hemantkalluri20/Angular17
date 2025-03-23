import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products';

@Component({
  // selector: 'pm-product-details', // as this is a routing component, we don't need a selector
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit{
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=`: ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }

}