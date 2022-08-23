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
 
}