import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {

  constructor() { }


  operA='';
  operB='';
 resultado =10;
  sumatoria(event:Event){
    this.operA = (<HTMLInputElement>event.target).value;
    this.operB = (<HTMLInputElement>event.target).value;

    }
    resul(){
      this.resultado= Number(this.operA) + Number(this.operB);
      console.log(this.resultado);
    }

}
