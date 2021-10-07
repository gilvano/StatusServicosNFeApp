import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatusPorEstadoComponent} from "./components/status-por-estado/status-por-estado.component";

const routes: Routes = [
  { path:'', component: StatusPorEstadoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
