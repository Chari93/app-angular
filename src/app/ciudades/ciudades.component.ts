import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadesComponent {
  @Input() city!: string;
  @Input() select!: string;
  @Output() cityClicked = new EventEmitter<string>();
//tienes que llamar al metodo, en este caso onClickCity, tú estabas llamando al Output cityClicked
  onClickCity(city:string):void{
    //cityClicked es el output, sólo lo puedes llamar desde otro componente que tenga el tag <app-ciudades (cityClicked)="metodo($event)"></app-ciudades>
   this.cityClicked.emit(city)
  }
  counterRender():boolean{
    console.log('Render ciuades')
    return true;
  }
}
//luego antes de irte tienes que hacer 

//git add .
//git commit -m  "un mensaje de los cambios"
//git push
//todo ello desde el directorio   app-angular/app1