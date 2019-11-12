import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { DatabaseModel } from './database.service-model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticatorService } from './authenticator.service';

@Injectable({
    providedIn: 'root'
  })

export class DatabaseService {

   public database: firebase.database.Reference;

constructor(public afDb: AngularFireDatabase,
            public User: AuthenticatorService) { }

    public writeUserData(item, riscado) {
        const userId = this.User.getUserID();
        const newKey = firebase.database().ref('users/' + userId).push();
        newKey.set({
        item,
        riscado,
        });
    }
}
