import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myId: string;
  token: string;

  constructor(private http: HttpClient) { }

  getMyInfo() {
    this.token = localStorage.getItem("access_token");
    return this.http.get(`${base_url}/users/me?access_token=${this.token}`)
      .pipe(
        tap((resp: any) => {
          this.myId = resp.id;
        })
      );
  }

  getMyItems(token) {
    return this.http.get(`${base_url}/users/${this.myId}/items?access_token=${token}`);
  }

}
