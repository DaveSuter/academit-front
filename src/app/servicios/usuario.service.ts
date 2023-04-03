import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBase:string = "http://localhost:8080/usuarios/"
  private url:string; //ver endpoint


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

  login(usuario:Usuario){
    this.url= this.urlBase+"login"; //ver endpoint
    return this.http
    .post(this.url, usuario)
    .pipe(
      catchError(this.handlerException)
    );
  }

  register(usuario:Usuario){
    this.url = this.urlBase + "create";
    return this.http
    .post(this.url, usuario)
    .pipe(
      catchError(this.handlerException)
    );
  }
}
