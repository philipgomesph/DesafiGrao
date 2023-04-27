import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  listaRestaurant(): Observable<any> {
    return this.http.get('http://localhost:3333/restaurant/showall');
  }
}
