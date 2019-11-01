import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public searchValue: string = ''

  public lista: any[] = [];

  public novoItem: any = '';

  public classeRisca: string = ' ';

  public onInput (event) {
    this.novoItem = event.target.value;
   
  }

  public onClick() {
    this.lista.push(this.novoItem);
    this.searchValue = ' ';
    this.novoItem = ' ';

  }

  public onPress() {
    this.classeRisca = 'item-lista-modified'
  }
  

  constructor() { }

  ngOnInit() {
  }

}
