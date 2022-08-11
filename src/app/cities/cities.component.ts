import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  //este es el tag que pondrás en otro componente
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
   @Input() city !: string;
   @Input() select !: string;
   @Output() cityClicked = new EventEmitter<string>();
//tienes que llamar al metodo, en este caso onClickCity, tú estabas llamando al Output cityClicked
   onClickCity(city:string):void{
     //cityClicked es el output, sólo lo puedes llamar desde otro componente que tenga el tag <app_cities (cityClicked)="metodo($event)"></app_cities>
    this.cityClicked.emit(city)
  }
}
//git init
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Chari93/app-angular.git
// git push -u origin main