import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

const appUrl = environment.appUrl;

@Injectable({
  providedIn: 'root'
})
export class CoastlineService {

  featureCategories = "Coastline/GetFeatureCategories";
  featuresByCategory = "Coastline/GetFeaturesByCategory";

  constructor(private httpClient: HttpClient) { }

  getFeatureCategory(): Observable<any[]> {
    return this.httpClient.get<any[]>(appUrl + this.featureCategories)
      .pipe(catchError(this.handleError));
  }
  getFeaturesByCategory(CategoryId:any): Observable<any[]> {
    return this.httpClient.get<any[]>(appUrl + this.featuresByCategory + "?CategoryId=" +CategoryId)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error);
    }
    else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('There is a proble with service');
  }
}
