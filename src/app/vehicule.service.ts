import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculeService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:3000';

  getVehiculeDetails(immatriculation: string): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/vehicule/${immatriculation}`;
    return this.http.get<any>(url, {observe: 'response'});
  }
}
