import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formulario } from './dominio/formulario';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

   save(formulario: Formulario) {
    return this.http.post<any>("http://localhost:8080/demoSJ/rs/clientes/", formulario);
   }
   getAll(){
    return this.http.get<any>("http://localhost:8080/demoSJ/rs/clientes/all");
   }
    delete(formulario: Formulario){
      const url = 'http://localhost:8080/demoSJ/rs/clientes';
    return this.http.delete(url, { body: formulario });
    }
  
    update(formulario: Formulario) {
      const url = 'http://localhost:8080/demoSJ/rs/clientes';
      return this.http.put(url, formulario);
    }
  

  
   
}
