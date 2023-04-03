import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Card } from '../modelos/card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private urlBase:string = "http://localhost:8080/"

  private url:string= this.urlBase+"shows/dtos"; //ver endpoint

  constructor(private http:HttpClient) { }

  private handlerException(error: HttpErrorResponse){
    //console.log(error);
    if(error.error instanceof ErrorEvent){
      console.log('Error del front ' + error.error.message)
    } else {
      console.log('Error del back ' + error.error.message + error.error.status);
    }
    return throwError('Error de comunicacion');
  }

  getAll():Observable<Array<Card>>{
    return this.http
      .get<Array<Card>>(this.url)
      .pipe(
        catchError(this.handlerException)
      );
  }
}
