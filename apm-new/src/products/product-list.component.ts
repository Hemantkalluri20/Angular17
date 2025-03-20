import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { IProduct } from "./products";
import { ConvertToSpacesPipe } from "../shared/pipes/convert-to-space.pipe";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductService],
  imports: [FormsModule, CommonModule, ConvertToSpacesPipe]

})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredProducts: IProduct[] = [];
  errorMessage: string = '';
  sub: any;

  private _listFilter: string = '';
  private _productService;

  constructor(private productService: ProductService) {
    this._productService= productService;

  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(this._listFilter);
  }

  showImage: boolean = false;
  products: IProduct[] = [
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('Productlist oninit')
     this.sub = this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
    // this._listFilter = 'cart'
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }
  }
