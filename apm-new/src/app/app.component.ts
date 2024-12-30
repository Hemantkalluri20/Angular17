import { Component } from "@angular/core";
import { ProductListComponent } from "../products/product-list.component";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `,
  imports: [ProductListComponent]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'pm-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'apm-new';
// }
