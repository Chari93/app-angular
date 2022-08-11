import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cities = ['Ferrol','Coruña','Neda', 'O Grove'];
  name = '';
  select = '';
  title = 'app1';
  url = 'https://modogeeks.com/wp-content/uploads/2015/12/harry-potter-olly-moss-goblet-of-fire.png';

  addNewCity(city:string):void{
    this.cities.push(city)
  }
  onCityClick(city:string): void {
    console.log('city = ', city)
    this.select = city;
  }
  onClear():void{
    this.select = ''
  }
}
