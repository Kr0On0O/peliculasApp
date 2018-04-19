import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  peliculas:any;
  populares:any;
  popularesNinos:any;
  constructor(private _ps:PeliculasService,
              private auth:AuthService) {
    this._ps.getCartelera().subscribe(data=>{this.peliculas=data})
    this._ps.getPopulares().subscribe(data=>{this.populares=data})
    this._ps.getPopularesNinos().subscribe(data=>{this.popularesNinos=data})
   }

  ngOnInit() {
  }

}
