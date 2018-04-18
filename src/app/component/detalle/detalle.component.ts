import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
termino:string="";
pelicula:any;
  constructor(private _acr:ActivatedRoute,
              private _peli:PeliculasService,
              private _location: Location ) {
                this._acr.params.subscribe(params=>{this.termino=params['id'], console.log(params)})
                this._peli.detallePelicula(this.termino).subscribe(data=>{this.pelicula=data, console.log(this.pelicula)})

               }

  back(){
    this._location.back();
  }
  ngOnInit() {
  }

}
