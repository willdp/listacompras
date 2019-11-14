import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticatorService } from './authenticator.service';
import * as R from 'ramda';

@Injectable({
    providedIn: 'root'
  })

export class DatabaseService {

  public list: any [] = [];

constructor(public afDb: AngularFireDatabase,
            public User: AuthenticatorService) { }

    public async getList(){
      let list:any[] = [];
      const userId = this.User.getUserID();
      const ItemList = firebase.database().ref('users/' + userId);
      await ItemList.once('value', function(snapshot){
        list = R.values(snapshot.val());
      })
      this.list = list;
    }

    public writeUserData(item, riscado) {
        const userId = this.User.getUserID();
        const newKey = firebase.database().ref('users/' + userId).push();
        newKey.set({
        item,
        riscado,
        })
    }
    public deleteItem() {
      const userId = this.User.getUserID();
      const deletedKey = firebase.database().ref('users/' + userId).remove();
    }
    public returnDatabaseList(){
      return this.list;
    }
}
