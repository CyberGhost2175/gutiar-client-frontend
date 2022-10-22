import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import { Guitar } from '../model/guitar';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient,
     private errorService: ErrorService) { }

  getAll(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>('http://localhost:8000/api/guitarzone/guitars', {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    ) 
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
