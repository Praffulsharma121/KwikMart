import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path:'home-page', component:HomePageComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'search-result', component: SearchResultsComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
