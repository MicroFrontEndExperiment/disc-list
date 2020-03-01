import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Longplay } from './longplay.model';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LongplayService {

  API_BASE_URL = environment.API_BASE_URL;
  url = `${this.API_BASE_URL}longplays`;

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  /**
   * Get all longplays
   */
  getLongPlays() {
    return this.httpClient.get<Longplay[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  /**
   * Get long play by id
   * @param id Long play ID
   */
  getLongPlayById(id: number): Observable<Longplay> {
    return this.httpClient.get<Longplay>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = error.error.message;
    } else {
      // Server side error
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
