import { Component, OnInit } from '@angular/core';
import {StatusEstado} from "../../model/status-estado";
import {StatusNfeService} from "../../service/status-nfe.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-status-estado',
  templateUrl: './status-estado.component.html',
  styleUrls: ['./status-estado.component.css']
})
export class StatusEstadoComponent implements OnInit {

  constructor(private statusNfeService: StatusNfeService) { }

  estados: SelectItem[];
  estadoSelecionado: SelectItem;
  statusEstado: StatusEstado;
  ngOnInit(): void {
    this.estados = [
      {label: 'AC', value: 'AC'},
      {label: 'AL', value: 'AL'},
      {label: 'AM', value: 'AM'},
      {label: 'AP', value: 'AP'},
      {label: 'BA', value: 'BA'},
      {label: 'CE', value: 'CE'},
      {label: 'DF', value: 'DF'},
      {label: 'ES', value: 'ES'},
      {label: 'GO', value: 'GO'},
      {label: 'MA', value: 'MA'},
      {label: 'MG', value: 'MG'},
      {label: 'MS', value: 'MS'},
      {label: 'MT', value: 'MT'},
      {label: 'PA', value: 'PA'},
      {label: 'PB', value: 'PB'},
      {label: 'PE', value: 'PE'},
      {label: 'PI', value: 'PI'},
      {label: 'PR', value: 'PR'},
      {label: 'RJ', value: 'RJ'},
      {label: 'RN', value: 'RN'},
      {label: 'RO', value: 'RO'},
      {label: 'RR', value: 'RR'},
      {label: 'RS', value: 'RS'},
      {label: 'SC', value: 'SC'},
      {label: 'SE', value: 'SE'},
      {label: 'SP', value: 'SP'},
      {label: 'TO', value: 'TO'}
    ];

    this.statusEstado = {estado: "", status: ""}
  }

  onChangeEstado(event: any) {
    this.buscarStatusEstado(event.value);
  }
  buscarStatusEstado(estado: string) {
    this.statusNfeService.buscarStatusEstado(estado).subscribe(data => {
      this.statusEstado = data
    });
  }
}
