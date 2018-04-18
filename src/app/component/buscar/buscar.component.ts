import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
termino:string="";
peliculas:any[]=[];

  constructor(private _acr:ActivatedRoute,
              private _peli:PeliculasService ) {
        this._acr.params.subscribe(params=>{this.termino=params['termino']})
        this._peli.buscarPelicula(this.termino).subscribe(data=>{console.log(data), this.peliculas=data})
   }


   
  ngOnInit() {}

}
