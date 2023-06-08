import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/dominio/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.producto = new Producto()
        this.producto = params['producto']
      }
    }

  guardar() {
    console.log(this.producto)
    this.productoService.save(this.producto)
    this.producto = new Producto()
  }
  actualizar(producto: Producto) {
    this.productoService.update(this.producto.uid,this.producto)
    this.router.navigate(['paginas/ListaProducto'])

  }
}



