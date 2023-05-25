import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcercaComponent } from './Page/arcerca/arcerca.component';
import { ContactoComponent } from './Page/contacto/contacto.component';
import { ListaComponent } from './Page/lista/lista.component';


const routes: Routes = [
  {path:"paginas/acerca",component: ArcercaComponent},
  {path:"paginas/Contacto",component: ContactoComponent},
  {path:"paginas/Lista",component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
