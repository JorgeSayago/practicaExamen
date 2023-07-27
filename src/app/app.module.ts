import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { ArcercaComponent } from './Page/arcerca/arcerca.component';
import { ContactoComponent } from './Page/contacto/contacto.component';
import { ListaComponent } from './Page/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductoComponent } from './Page/producto/producto.component';
import { ListaProductoComponent } from './Page/lista-producto/lista-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarComponent } from './Page/actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    ArcercaComponent,
    ContactoComponent,
    ListaComponent,
    ProductoComponent,
    ListaProductoComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
     MatTooltipModule,
     HttpClientModule,
     provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),
     provideFirestore(() => getFirestore()),

  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})


export class AppModule { }
