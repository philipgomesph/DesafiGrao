import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: UserLogin = {
    email: '',
    password: '',
  };

  authorized = false;

  logar() {
    if (this.authorized === true) {
      this.router.navigate(['/home']);
    }
  }
  eventlogin() {
    console.log(this.user);
    this.userService.login(this.user).subscribe(
      (user) => {
        this.user = user;
        if (user) {
          console.log('ENTROU');
          this.authorized = true;
          this.logar();
        }
      },
      (err) => {
        console.log('Erro ao fazer login', err);
      }
    );
  }

  constructor(private userService: UserService, private router: Router) {}
}
