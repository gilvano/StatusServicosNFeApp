import {Component, OnInit} from '@angular/core';
import {StatusNfeService} from "../../service/status-nfe.service";
import {StatusEstado} from "../../model/status-estado";

@Component({
  selector: 'app-status-por-estado',
  templateUrl: './status-por-estado.component.html',
  styleUrls: ['./status-por-estado.component.css']
})

export class StatusPorEstadoComponent implements OnInit {

  constructor(private statusNfeService: StatusNfeService) { }

  statusEstados: StatusEstado[];
  ngOnInit(): void {
    this.buscarStatusAtualPorEstado();
  }

  buscarStatusAtualPorEstado(){
    this.statusNfeService.buscarStatusAtualPorEstado().subscribe(data => {this.statusEstados = data});
    //this.statusEstados = this.statusNfeService.buscarStatusAtualPorEstado();
    //return this.statusNfeService.buscarStatusAtualPorEstado();
  }

}

