import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './inc-component/error/error.component';
import { HomeComponent } from './inc-component/home/home.component';
import { ProductsComponent } from './inc-component/products/products.component';

const routes: Routes = [
{path: "", component: HomeComponent},
{path: "home", component: HomeComponent},
{path: "about", component: ErrorComponent},
{path: "products", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
