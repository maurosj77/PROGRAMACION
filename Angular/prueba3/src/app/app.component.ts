import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //La clase 'AppComponent' representa los datos de un empleado. 
  //Definimos e inicializamos 5 propiedades:
  nombre = 'Perez Gabriela';
  edad = 46;
  email = 'suemail@gmail.com';
  sueldos = [30000, 40000, 50000];
  activo = true;

  // El metodo esActivo almacena la propiedad 'activo' 
  //retornamos un string que informa si es un empleado activo o inactivo
  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }
  
  //ultimos3Sueldos retorna la suma de sus últimos 3 meses de trabajo 
  //que se almacenan en la propiedad 'sueldos'
  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
}
