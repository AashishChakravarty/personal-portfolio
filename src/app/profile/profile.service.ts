import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'contact', data);
  }

  skills(): Observable<any> {
    return this.http.get(this.baseUrl + 'skills');
  }

  education(): Observable<any> {
    return this.http.get(this.baseUrl + 'education');
  }

  exprience(): Observable<any> {
    return this.http.get(this.baseUrl + 'exprience');
  }
}
