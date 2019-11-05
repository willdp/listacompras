import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

export interface ModeloLista {
    item: string;
    riscado: boolean;
}
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lista: ModeloLista[] = [];

  public novoItem = '';

  public deleting: string = '';

  public onClick() {
    if(this.novoItem === ''){ return ;}
    this.lista.push({item: this.novoItem, riscado: false});
    this.novoItem = '';

  }

  public riscar(i) {
    this.lista[i].riscado = !this.lista[i].riscado;
  }

  public aleatorio() {

   console.log(this.deleting);
   this.lista.pop();

  }
  
  constructor() { }

  ngOnInit() {
  }

}
