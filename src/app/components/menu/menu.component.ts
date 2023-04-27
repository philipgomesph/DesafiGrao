import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus: Array<any> = new Array();
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  query: any;
  restaurantes: Array<any> = new Array();

  ngOnInit(): void {
    this.pegaQuery(), this.listaMenu();
  }

  pegaQuery() {
    this.query = this.menuService.pegaQuery();
    console.log(this.query);
  }

  listaMenu() {
    this.menuService.listaMenu(this.query).subscribe(
      (menus) => {
        this.menus = menus;
      },
      (err) => {
        console.log('Erro ao listar menu', err);
      }
    );
  }

  listaRestaurante() {
    this.restaurantService.listaRestaurant().subscribe(
      (restaurantes) => {
        this.restaurantes = restaurantes;
      },
      (err) => {
        console.log('Erro ao listar restaurante', err);
      }
    );
  }
}
