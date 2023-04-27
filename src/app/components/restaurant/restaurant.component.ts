import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  restaurantes: Array<any> = new Array();

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.listaRestaurante();
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
