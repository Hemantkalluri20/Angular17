import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { WelcomeComponent } from '../home/welcome.component';
import { ProductDetailsGuard } from '../products/product-details/product-details.guard';


export const routes: Routes = [
   
    {path: 'products' , component: ProductListComponent },
    {
        path: 'products/:id' ,
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent },
    {path: 'welcome', component: WelcomeComponent },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];
export const appRouter = provideRouter(routes);
