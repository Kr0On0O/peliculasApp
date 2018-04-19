import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {BuscarComponent} from './component/buscar/buscar.component';
import {DetalleComponent} from './component/detalle/detalle.component';
import {InfantilComponent} from './component/infantil/infantil.component';
import {AuthGuardService} from './services/auth-guard.service';
import { ChatComponent } from './component/chat/chat.component';

const app_routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Buscar/:termino',
    component: BuscarComponent,
    canActivate:[AuthGuardService]
  },

  { path: 'Detalle/:id', component: DetalleComponent },
  { path: 'Infantil', component: InfantilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
