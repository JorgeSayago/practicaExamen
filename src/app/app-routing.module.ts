import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcercaComponent } from './Page/arcerca/arcerca.component';
import { ContactoComponent } from './Page/contacto/contacto.component';
import { ListaComponent } from './Page/lista/lista.component';
import { ProductoComponent } from './Page/producto/producto.component';
import { ListaProductoComponent } from './Page/lista-producto/lista-producto.component';
import { ActualizarComponent } from './Page/actualizar/actualizar.component';


const routes: Routes = [
  {path:"paginas/acerca",component: ArcercaComponent},
  {path:"paginas/Contacto",component: ContactoComponent},
  {path:"paginas/Lista",component: ListaComponent},
  {path:"paginas/Producto",component: ProductoComponent},
  {path:"paginas/ListaProducto",component: ListaProductoComponent},
  {path:"paginas/actualizar",component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
