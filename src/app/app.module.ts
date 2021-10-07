import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPorEstadoComponent } from './components/status-por-estado/status-por-estado.component';
import {TableModule} from "primeng/table";
import {StatusNfeService} from "./service/status-nfe.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StatusPorEstadoComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      TableModule
    ],
  providers: [StatusNfeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
