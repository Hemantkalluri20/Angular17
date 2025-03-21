import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'pm-product-details', // as this is a routing component, we don't need a selector
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  constructor() { }

  ngOnInit(): void {
  }

}