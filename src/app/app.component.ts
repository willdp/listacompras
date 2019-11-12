import { Component } from '@angular/core';
import { AuthenticatorService } from '../service/authenticator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appwill';

  constructor(public auth: AuthenticatorService ){
      this.auth.listenAuthState();
  }
}
