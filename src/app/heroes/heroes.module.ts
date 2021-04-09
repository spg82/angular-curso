import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//configuracion del NgModule (con decorador @NgModule)
@NgModule({
     declarations:[
          HeroeComponent,
          ListadoComponent
     ],
     // Que cosas quiero hacer visibles fuera de este módulo.
     exports: [
          HeroeComponent,
          ListadoComponent,
     ],
     // modulos
     imports:[
          //
          CommonModule,
     ],
})
export class HeroesModule{

} 