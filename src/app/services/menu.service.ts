import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  pegaQuery() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
    const params = currentUrl.slice(8, 300);
    console.log('Params');
    console.log(params);

    return params;
  }

  listaMenu(nome: string): Observable<any> {
    return this.http.get(
      'http://localhost:3333/restaurant/detail/'.concat(nome)
    );
  }

  nomeRestaurante(nome: string): Observable<any> {
    console.log('teste1');
    const print = this.http.get(
      'http://localhost:3333/restaurant/namerestaurante/'.concat(nome)
    );
    console.log(print);

    return print;
  }
}
