import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
nombre:string='';
apellido:string='';
mensaje:string='';
registrado=false;
 entradas:object[];

 constructor(){

  this.entradas=[
    {jaja:"Array", chucha:"holas"},
  {jaja:"gg", chucha:"hy"},
  {jaja:"Arrfggay", chucha:"hodfdlas"}];
}






usuRegistrado(){
this.mensaje =  'Se registro Usuario';
this.registrado=true;


}



}
