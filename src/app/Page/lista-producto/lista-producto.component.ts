import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/dominio/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent {
  listadoContactos: Producto[] = []
  listadoProductoFire: any;

  constructor(private productoService: ProductoService,
      private router: Router) {
    this.listadoContactos = productoService.getList()
    console.log('listadoformulario', this.listadoContactos)
    this.listadoProductoFire = productoService.getAll()
  }

  delete(producto: Producto){
    console.log('listadoformulario', this.listadoContactos)
    this.productoService.delete(producto.uid)
  }

  editar(producto: Producto){
    console.log(producto)
    let params: NavigationExtras = {
      queryParams: {
        producto: producto,
      }
    }
    this.router.navigate(['paginas/Producto'], params)
  }

  eliminar(producto: Producto) {
    for(let i = 0 ; i < this.listadoContactos.length ; i++){
      if(this.listadoContactos[i] === producto){
        console.log("son iguales");
        this.listadoContactos.splice(i,1);
      }
    }
  }
  displayedColumns: string[] = ['nombre', 'descripcion', 'precio'];
  dataSource = this.listadoContactos;
}
