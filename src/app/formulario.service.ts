import { Injectable } from '@angular/core';
import { Formulario } from './dominio/formulario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FormularioService {

  private dbPath = '/formulario'; 
  
  formularios: Formulario[] = []

  FormularioRef: AngularFirestoreCollection<Formulario>;


  constructor(private db: AngularFirestore) {
    this.FormularioRef = db.collection(this.dbPath);
  }

  save(formulario: Formulario){
    this.formularios.push(formulario)
    console.log(this.formularios)
    formulario.uid=this.db.createId()
    this.create(formulario)
  }
  getList(){
    return this.formularios
  }
  getAll() {
    return this.FormularioRef.valueChanges();
  }

  create(formulario: Formulario): any {
    return this.FormularioRef.doc(formulario.uid).set({ ...formulario });
  }
  update(id: string, data: any): Promise<void> {
    return this.FormularioRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.FormularioRef.doc(id).delete();
  }
}
