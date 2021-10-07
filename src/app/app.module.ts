import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StatusPorEstadoComponent} from './components/status-por-estado/status-por-estado.component';
import {TableModule} from "primeng/table";
import {StatusNfeService} from "./service/status-nfe.service";
import {HttpClientModule} from "@angular/common/http";
import {StatusPanelComponent} from './components/status-panel/status-panel.component';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaiorIndisponibilidadeComponent } from './components/maior-indisponibilidade/maior-indisponibilidade.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    StatusPorEstadoComponent,
    StatusPanelComponent,
    MaiorIndisponibilidadeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    CardModule
  ],
  providers: [StatusNfeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
