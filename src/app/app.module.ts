import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from 'src/service/database.service';
import { AuthenticatorService } from 'src/service/authenticator.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'list', component: ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ListComponent,
    LoginPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthenticatorService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
