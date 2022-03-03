import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent  {
    @Output() personaCreada= new EventEmitter<Persona>();


  nombreInput : string = '';
  apellidoInput : string = '';
  agregarPersona(){
      let persona1 = new Persona (this.nombreInput,this.apellidoInput);
      //this.personas.push(persona1);
      this.personaCreada.emit(persona1);

  }

}
