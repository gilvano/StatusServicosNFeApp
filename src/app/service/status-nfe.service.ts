import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StatusEstado} from "../model/status-estado";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable()
export class StatusNfeService {
  statusAtualPorEstadoUrl = 'http://localhost:8080/api/statusservico/statusatual';

  constructor(private http: HttpClient) { }

  buscarStatusAtualPorEstado(): Observable<StatusEstado[]> {
    let statusEstado  = this.http.get<StatusEstado[]>(`${this.statusAtualPorEstadoUrl}`)
                            .pipe(
                            retry(2),
                            catchError(this.handleError)
                          );

    return statusEstado;
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
