import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cities = ['Ferrol','Coruña','Neda', 'O Grove'];
  name = '';
  select = '';
  title = 'app1';
  criteria = '';

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
  onSearch():void{
    console.log('search')
  }

}
