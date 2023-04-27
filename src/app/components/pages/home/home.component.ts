import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { HttpClient } from '@angular/common/http';
import { IResturant } from 'src/app/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataList: IResturant[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3333/restaurant/showall')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
