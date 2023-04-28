import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login(user: UserLogin): Observable<any> {
    this.http
      .post('http://localhost:3333/users/login', user)
      .subscribe((response) => {
        console.log('RESPONSE aqui !');
        console.log(response);
      });

    return this.http.post('http://localhost:3333/users/login', user);
  }

  constructor(private http: HttpClient) {}
}
