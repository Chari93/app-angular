import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CiudadesComponent,
    FilterPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
