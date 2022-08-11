import { Component, OnInit } from '@angular/core';

interface ContactForm{
  "nombre": string,
  "edad": boolean,
  "seccion": string,
  "review": string;
}
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  model ={
    nombre:'',
    edad:false,
    seccion:'',
    review:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(values:any):void{
    console.log('Form values', values);
  }

}
