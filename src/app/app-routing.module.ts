import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewRestaurantComponent } from './components/pages/new-restaurant/new-restaurant.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new-restaurant', component: NewRestaurantComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'detail/:id', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
