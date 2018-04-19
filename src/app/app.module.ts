import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';

import {DatePipe} from '@angular/common';

import {PeliculasService} from './services/peliculas.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';


import {app_routing} from './app.route';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { DetalleComponent } from './component/detalle/detalle.component';
import { InfantilComponent } from './component/infantil/infantil.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { ChatComponent } from './component/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    DetalleComponent,
    InfantilComponent,
    NavbarComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    app_routing
  ],
  providers: [
    PeliculasService,
    DatePipe,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
