import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacesPipe } from '../shared/convert-to-space.pipe';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, CommonModule, ProductListComponent, AppComponent, FormsModule, convertToSpacesPipe
  ],
  providers: []
})
export class AppModule { }