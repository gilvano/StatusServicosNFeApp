import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StatusEstado} from "../model/status-estado";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MaiorIndisponibilidade} from "../model/maior-indisponibilidade";

@Injectable()
export class StatusNfeService {
  urlStatusAtualPorEstado = 'http://localhost:8080/api/statusservico/statusatual';
  urlMaiorIndisponibilidade = 'http://localhost:8080/api/statusservico/autoriazadormaiorindisponibilidade'


  constructor(private http: HttpClient) { }

  buscarStatusAtualPorEstado(): Observable<StatusEstado[]> {
    return this.http.get<StatusEstado[]>(`${this.urlStatusAtualPorEstado}`)
                            .pipe(
                            retry(2),
                            catchError(this.handleError)
                          );


  }

  buscarEstadoComMaiorIndisponibilidade(): Observable<MaiorIndisponibilidade>{
    return this.http.get<MaiorIndisponibilidade>(`${this.urlMaiorIndisponibilidade}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = "Status:  "+ error.status + "menssagem: "+ error.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
