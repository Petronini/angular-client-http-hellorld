// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';// necesario para REST(peticiones a un servidor)
import { AppRoutingModule } from './app-routing.module';

import { FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// modulos de PrimeNg
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

// components
import { AppComponent } from './app.component';
import { AltaCamareroComponent } from './components/alta-camarero/alta-camarero.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListadoCamareroComponent } from './components/listado-camarero/listado-camarero.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    AltaProductoComponent,
    ListadoCamareroComponent,
    ListadoProductoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
