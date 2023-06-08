import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formulario } from 'src/app/dominio/formulario';
import { FormularioService } from 'src/app/formulario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formulario: Formulario = new Formulario();

  constructor(private formularioService: FormularioService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.formulario = new Formulario()
        this.formulario = params['formulario']
      }
    }

  guardar() {
    console.log(this.formulario)
    this.formularioService.save(this.formulario)
    this.formulario = new Formulario()
  }
  actualizar(formulario: Formulario) {
    this.formularioService.update(this.formulario.uid,this.formulario)
    this.router.navigate(['paginas/Lista'])

  }

}
