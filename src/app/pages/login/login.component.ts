import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getAuth(){
    this.authService.getAuthURL().subscribe((resp: any) => {
      if(resp.ok) {
        console.log(resp.url);
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Ha ocurrido un error, por favor intenta mas tarde',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

}
