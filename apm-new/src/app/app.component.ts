import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
imports: [ RouterOutlet],
  template: `
  <!-- <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div> -->
  <!-- <div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div> -->
  `,

})

export class AppComponent {
  pageTitle: string = 'Product Management Portal';
}
