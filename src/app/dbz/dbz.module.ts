import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  //exportacion de componentes
  exports: [
    MainPageComponent,
  ],
  //importacion de modulos
  imports: [
    CommonModule,
    FormsModule
  ],
  // son los servicios
  providers: [
    DbzService,
  ]
})
export class DbzModule { }
