import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Prueba1Component } from './prueba1/prueba1.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,

    Prueba1Component,
     EncabezadoComponent,
     AcercaDeComponent,
     ExperienciaComponent,
     EducacionComponent,
     SkillsComponent,
     ProyectosComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
