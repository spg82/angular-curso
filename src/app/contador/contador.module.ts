import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
     declarations:[
          ContadorComponent,
     ],
     exports:[
          ContadorComponent,
     ],
     imports:[
          // Para poder utilizar ngIF ngFor con CommonModule
         // CommonModule,
     ],
})
export class ContadorModule{

}