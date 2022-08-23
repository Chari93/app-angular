import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContacReactiveComponent } from "./contac-reactive/contac-reactive.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { HomeComponent } from "./home/home.component";
const routes : Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'contact-reactive', component: ContacReactiveComponent },
  { path: 'contact-template', component: ContactoComponent },
  { path: 'home', component:  HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}