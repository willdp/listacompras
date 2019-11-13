import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';

export interface ModeloLista {

    item: string;
    riscado: boolean;
    userId?: any;
}
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lista: ModeloLista[] = [];

  public deletedList: string[];

  public novoItem = '';

  public deleting: string = '';

  public riscado: boolean = false;

  public newListItem: any;
 
  public onAdding(riscado) {
    if(this.novoItem === ''){ return ;}
    this.listing();

    this.newListItem = this.pushDatabase(this.novoItem, riscado);
    this.lista.push({item: this.novoItem, riscado: false});
    this.novoItem = '';
  }

  public riscar(i) {
    this.lista[i].riscado = !this.lista[i].riscado;
  }

  public onDelete() {
   this.lista.splice(Number(this.deleting) - 1, 1);
   this.deleting = '';

  }

  public pushDatabase(item, riscado) {
    this.database.writeUserData(item, riscado);
  }

  public listing(){
    this.database.getList();
  }
  
  constructor(public database: DatabaseService) { }

  ngOnInit() {
  }

}
