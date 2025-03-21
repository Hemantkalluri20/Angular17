import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { WelcomeComponent } from '../home/welcome.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    {path: 'products' , component: ProductListComponent },
    {path: 'products/:id' , component: ProductDetailsComponent },
    
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'products', pathMatch: 'full'}
];
export const appRouter = provideRouter(routes);
