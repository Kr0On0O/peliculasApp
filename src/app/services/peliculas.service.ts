import { Injectable } from '@angular/core';
import {Jsonp,Http} from '@angular/http';
import {DatePipe} from '@angular/common';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {
peliculas:any;
  private apikey:string="b63b4c0d06dc69e4ef14d4705b571e5d";
  private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp,
              private http:Http,
              private datePipe:DatePipe) { }

  getPopulares(){
    let url=`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map( res=>{
      this.peliculas=res.json().results;
     return res.json().results});
  }

  buscarPelicula( texto:string ){
    console.log(texto);
  let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  return this.jsonp.get( url )
              .map( res=>{
                this.peliculas=res.json().results;
               return res.json().results});
  }

    getCartelera(){
      let desde =new Date();
      let hasta =new Date();
      hasta.setDate(hasta.getDate()+7)
      let desdeStr=`${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`
      let hastaStr=`${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`

      let url=`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
      return this.jsonp.get( url )
                  .map( res=>{
                    this.peliculas=res.json().results;
                   return res.json().results});
    }

    detallePelicula(id:string){
      console.log(id)
      let url=`${this.urlMoviedb}/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
      return this.jsonp.get( url )
                  .map( res=>{
                    this.peliculas=res.json();
                   return res.json()});
    }

    getPopularesNinos(){
      let url=`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
      return this.jsonp.get(url).map( res=>{
        this.peliculas=res.json().results;
       return res.json().results});
    }


}
