import { Component } from "@angular/core";
import { ProductListComponent } from "../products/product-list.component";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: `
  //<div><h1>{{pageTitle}}</h1>
  //<pm-products></pm-products>
  //</div>
  //`,
  imports: [ProductListComponent]
})

export class AppComponent {
  pageTitle: string = 'Product Management Portal';
}
