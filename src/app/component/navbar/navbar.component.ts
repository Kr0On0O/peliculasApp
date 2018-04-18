import { Component, OnInit } from '@angular/core';
import {PeliculasService}from "../../services/peliculas.service";
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  termino:string="";
  constructor(public _ps:PeliculasService,
              public router:Router) { }



    buscar(){
      this.router.navigate(['Buscar',this.termino])
      window.location.reload();
    }
  ngOnInit() {
  }

}
