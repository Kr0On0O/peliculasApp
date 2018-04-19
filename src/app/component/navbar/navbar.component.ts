import { Component, OnInit } from '@angular/core';
import {PeliculasService}from "../../services/peliculas.service";
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  termino:string="";
  constructor(public _ps:PeliculasService,
              public router:Router,
              private auth:AuthService) {
                  auth.handleAuthentication();
            }




  ngOnInit() {
  }
  buscar(){
    this.router.navigate(['Buscar',this.termino])
    window.location.reload();
  }
  login(){
  this.auth.login();
}
logout(){
  this.auth.logout();
}

}
