import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
nombre: string = 'Juan';
private apellido: string = 'Perez';
edad :number = 34;
getEdad(): number{
  return this.edad;
}
}


