import { Injectable } from '@angular/core';
import { Formulario } from './dominio/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  formularios: Formulario[] = []

  constructor() { }

  save(formulario: Formulario){
    this.formularios.push(formulario)
    console.log(this.formularios)
  }

  getList(){
    return this.formularios
  }
}
