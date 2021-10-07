import { Component, OnInit } from '@angular/core';
import {StatusEstado} from "../../model/status-estado";
import {MaiorIndisponibilidade} from "../../model/maior-indisponibilidade";
import {StatusNfeService} from "../../service/status-nfe.service";

@Component({
  selector: 'app-maior-indisponibilidade',
  templateUrl: './maior-indisponibilidade.component.html',
  styleUrls: ['./maior-indisponibilidade.component.css']
})
export class MaiorIndisponibilidadeComponent implements OnInit {

  constructor(private statusNfeService: StatusNfeService) { }

  maiorIndisponibilidade: MaiorIndisponibilidade;
  ngOnInit(): void {
    this.buscarStatusAtualPorEstado();
  }

  buscarStatusAtualPorEstado(){
    this.statusNfeService.buscarEstadoComMaiorIndisponibilidade().subscribe(data => {
      this.maiorIndisponibilidade = data
    });
  }

}
