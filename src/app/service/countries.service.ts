import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags';

  constructor(private _http: HttpClient) { }

  getAllCountries(): Observable<HttpResponse<any>> {
    return this._http.get<any>(
      //'https://restcountries.com/v3.1/all',
      this.API_URL, { observe: 'response' })
  }
}
