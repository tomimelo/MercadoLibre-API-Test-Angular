import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: any = [];

  accessToken: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.accessToken = localStorage.getItem("access_token");
    this.usuarioService.getMyItems(this.accessToken)
      .subscribe( resp => {
        this.items = resp;
      });
  }

}
