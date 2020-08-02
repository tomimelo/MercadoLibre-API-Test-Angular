import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const code: string = this.route.snapshot.queryParamMap.get('code');
    this.getToken(code);
  }

  getToken(code: string){
    this.authService.getToken(code).subscribe((resp: any) => {
      if(resp.status === 400) {
        console.log(resp);
        Swal.fire({
          title: `Error: ${resp.error}`,
          text: resp.message,
          icon: 'error',
          confirmButtonText: 'Ok',
          onDestroy: () => {
            this.router.navigateByUrl("/home");
          }
        });
      } else {
        this.router.navigateByUrl("/perfil");
      }
    });
  }

}
