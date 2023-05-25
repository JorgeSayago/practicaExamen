import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Formulario } from 'src/app/dominio/formulario';
import { FormularioService } from 'src/app/formulario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  listadoContactos: Formulario[] = []

  constructor(private formularioService: FormularioService,
      private router: Router) {
    this.listadoContactos = formularioService.getList()
    console.log('listadoformulario', this.listadoContactos)
  }

  editar(formulario: Formulario){
    console.log(formulario)
    let params: NavigationExtras = {
      queryParams: {
        formulario: Formulario,
        nombre: 'jorge'
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }

  eliminar(formulario: Formulario) {
    for(let i = 0 ; i < this.listadoContactos.length ; i++){
      if(this.listadoContactos[i] === formulario){
        console.log("son iguales");
        this.listadoContactos.splice(i,1);
      }
    }
  }
  displayedColumns: string[] = ['nombre', 'cedula', 'direccion'];
  dataSource = this.listadoContactos;
}
