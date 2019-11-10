import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../service/authenticator.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public title: string = 'My list';

  constructor(public auth: AuthenticatorService) { }

  ngOnInit() {
  }

  public doLogout() {
    this.auth.doLogout();
  }
}
