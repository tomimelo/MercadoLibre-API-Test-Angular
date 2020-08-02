import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthURL() {
    return this.http.get(`${base_url}/auth/url`);
  }

  getToken(code: string) {
    return this.http.post(`${base_url}/auth/token`, {code})
              .pipe(
                tap((resp: any) => {
                  if(resp.access_token) {
                    localStorage.setItem("access_token", resp.access_token);
                  }
                })
              );
  }
}
