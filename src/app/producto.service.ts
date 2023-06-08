import { Injectable } from '@angular/core';
import { Producto } from './dominio/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dbPath = '/producto'; 
  
  productos: Producto[] = []

  ProductoRef: AngularFirestoreCollection<Producto>;


  constructor(private db: AngularFirestore) {
    this.ProductoRef = db.collection(this.dbPath);
  }

  save(producto: Producto){
    this.productos.push(producto)
    console.log(this.productos)
    producto.uid=this.db.createId()
    this.create(producto)
  }
  getList(){
    return this.productos
  }
  getAll() {
    return this.ProductoRef.valueChanges();
  }

  create(producto: Producto): any {
    return this.ProductoRef.doc(producto.uid).set({ ...producto });
  }
  update(id: string, data: any): Promise<void> {
    return this.ProductoRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.ProductoRef.doc(id).delete();
  }
}
