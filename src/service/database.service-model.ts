import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseModel {

  item: string = '';
  riscado: boolean = false;

  constructor() { }
}
