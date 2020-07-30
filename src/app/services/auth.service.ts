import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthURL() {
    return this.http.get(`${base_url}/auth/url`);
  }
}
