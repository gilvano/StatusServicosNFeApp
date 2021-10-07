import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatusPanelComponent} from "./components/status-panel/status-panel.component";

const routes: Routes = [
  { path:'', component: StatusPanelComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
