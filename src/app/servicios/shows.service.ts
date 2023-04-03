import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Show } from '../modelos/show';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private urlBase:string = "http://localhost:8080/shows"
  private url:string;
  public arrayShows:Show[] = [];
  private arrayShowSubject = new BehaviorSubject(this.arrayShows);

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

  get arrayShows$():Observable<any>{
    return this.arrayShowSubject.asObservable();
  }

  allShows(){
    this.arrayShowSubject.next(this.arrayShows)
  }

  getAll():Observable<Array<Show>>{
    this.url = this.urlBase + "";
    return this.http
    .get<Array<Show>>(this.url)
    .pipe(
      catchError(this.handlerException)
    );
  }

  create(show:Show){
    this.url = this.urlBase + "/crear";
    return this.http
    .post(this.url, show)
    .pipe(
      catchError(this.handlerException)
    )
  }

  update(show:Show){
    this.url = this.urlBase + "/" + show.idshow;
    return this.http
    .put(this.url, show)
    .pipe(
      catchError(this.handlerException)
    );
  }

  delete(show:Show){
    this.url = this.urlBase + "/" + show.idshow;
    return this.http
    .delete(this.url)
    .pipe(
      catchError(this.handlerException)
    );
  }
}
