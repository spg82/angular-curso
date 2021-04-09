import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  heroeBorrado: string = '';
  borrarHeroe():void{
    console.log('Borrando...');
    //elimina del arrray: pop() por detras , shift() por delante
     this.heroeBorrado = this.heroes.shift()  || '';

    console.log(this.heroeBorrado);
  }
}
