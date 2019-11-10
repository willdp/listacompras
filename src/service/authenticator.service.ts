import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  public email: string = '';
  public password: string = '';
  public authorization: string = '';
  public user: any = '';

  public doRegister(email, password){
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {
      this.router.navigate(['list'])
    }).catch((error) => {
      email= this.email;
      password= this.password;
      this.email= '';
      this.password= '';
    })
    firebase.auth().onAuthStateChanged(user => {
    });
  };

  public doLogin(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['list'])
    }
    ).catch((error) => {
      console.error('login',error);
    })
    
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.user = user;
      }
    );
  };

  public doLogout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate([''])}).catch(function(error) {
    })
    window.alert('Você foi deslogado!');
    firebase.auth().onAuthStateChanged(user => {
    })

  } 

  constructor(public afAuth: AngularFireAuth,
              public router: Router
  ) { }
}
