import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  getAllCountries(): Observable<HttpResponse<any>> {
    return this._http.get<any>(
      //'https://restcountries.com/v3.1/all',
      'https://restcountries.com/v3.1/all?fields=name,flags', { observe: 'response' })
  }
}
