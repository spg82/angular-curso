import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

// Los servicios tienen un decorador Injectable
@Injectable()
export class DbzService{
     private _personajes: Personaje[] = [
          {
            nombre: 'Goku',
            poder: 15000
          },
          {
            nombre: 'Vegeta',
            poder: 7500
          }
        ];
        get personajes():Personaje[]{
             //rompe la referencia
             return [...this._personajes];
        }
     constructor(){}
     agregarPersonaje(personaje:Personaje){
          this._personajes.push(personaje);
     }
}