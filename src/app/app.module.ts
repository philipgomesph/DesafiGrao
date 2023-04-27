import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewRestaurantComponent } from './components/pages/new-restaurant/new-restaurant.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MenuComponent } from './components/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewRestaurantComponent,
    PerfilComponent,
    RestaurantFormComponent,
    RestaurantComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, RestaurantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
