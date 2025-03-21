import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacesPipe } from '../shared/pipes/convert-to-space.pipe';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule, 
    FormsModule
  ],
  providers: []
})
export class AppModule { }