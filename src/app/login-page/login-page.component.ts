import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../service/authenticator.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public authorization: string = '';

  constructor( public auth: AuthenticatorService ) { }

  ngOnInit() {
  }

  public doLogin(email, password) {
    this.auth.doLogin(email, password);  
  }
  public doRegister(email, password){
    this.auth.doRegister(email, password);
  }
  public doLogout() {
    this.auth.doLogout();
  }
}
