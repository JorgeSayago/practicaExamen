import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formulario } from 'src/app/dominio/formulario';
import { FormularioService } from 'src/app/formulario.service';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {
  formulario: Formulario = new Formulario();

  constructor(private formularioService: FormularioService,
    private personaService: PersonaService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.formulario = new Formulario()
        this.formulario = params['formulario']
      }
    }

  actualizar(formulario: Formulario) {
    this.formularioService.update(this.formulario.cedula,this.formulario)
    this.router.navigate(['paginas/Lista'])

  }
  modificar(){ //fire actualizado
    console.log(this.formulario)
    //this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
    //this.contacto = new Contacto();

    //codigo para guardar en la base de datos
    this.personaService.update(this.formulario).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    //this.contacto=new Contacto()
    this.router.navigate(['paginas/Lista'])
    
    }

reloadPage(){

 }
}
