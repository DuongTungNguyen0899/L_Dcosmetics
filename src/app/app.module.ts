import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './inc-component/footer/footer.component';
import { HeaderComponent } from './inc-component/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './inc-component/main/main.component';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './inc-component/home/home.component';
import { ErrorComponent } from './inc-component/error/error.component';
import { ProductsComponent } from './inc-component/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ErrorComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
