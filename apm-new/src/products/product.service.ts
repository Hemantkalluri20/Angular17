import { Injectable } from "@angular/core";
import { IProduct } from "./products";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    private productUrl = 'api/products/products.json';
    // getProducts(): IProduct[]{
    //     return [
    //         {
    //           "productId": 1,
    //           "productName": "Leaf Rake",
    //           "productCode": "GDN-0011",
    //           "releaseDate": "March 19, 2021",
    //           "description": "Leaf rake with 48-inch wooden handle.",
    //           "price": 19.95,
    //           "starRating": 3.2,
    //           "imageUrl": "/src/assets/images/leaf_rake.png"
    //         },
    //         {
    //           "productId": 2,
    //           "productName": "Garden Cart",
    //           "productCode": "GDN-0023",
    //           "releaseDate": "March 18, 2021",
    //           "description": "15 gallon capacity rolling garden cart",
    //           "price": 32.99,
    //           "starRating": 4.2,
    //           "imageUrl": "assets/images/garden_cart.png"
    //         },
    //         {
    //           "productId": 5,
    //           "productName": "Hammer",
    //           "productCode": "TBX-0048",
    //           "releaseDate": "May 21, 2021",
    //           "description": "Curved claw steel hammer",
    //           "price": 8.9,
    //           "starRating": 4.8,
    //           "imageUrl": "assets/images/hammer.png"
    //         },
    //         {
    //           "productId": 8,
    //           "productName": "Saw",
    //           "productCode": "TBX-0022",
    //           "releaseDate": "May 15, 2021",
    //           "description": "15-inch steel blade hand saw",
    //           "price": 11.55,
    //           "starRating": 3.7,
    //           "imageUrl": "assets/images/saw.png"
    //         },
    //         {
    //           "productId": 10,
    //           "productName": "Video Game Controller",
    //           "productCode": "GMG-0042",
    //           "releaseDate": "October 15, 2020",
    //           "description": "Standard two-button video game controller",
    //           "price": 35.95,
    //           "starRating": 4.6,
    //           "imageUrl": "assets/images/xbox-controller.png"
    //         }
    //       ]
    // }
    constructor(private http: HttpClient){

    }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('api/products/products.json').pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
    }
    getProductById(productId: number): Observable<IProduct | undefined> {
      return this.getProducts().pipe(
          map((products: IProduct[]) => products.find(p => p.productId === productId))
      );
  }
    private handleError(err: HttpErrorResponse)
    {
      let errorMessage = '';
      if(err.error instanceof ErrorEvent){
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(()=> errorMessage);
    }
}
