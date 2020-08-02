import { Component, OnInit } from '@angular/core';

declare function sidebarFunction();

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { 
    
  }
  
  ngOnInit(): void {
    sidebarFunction();
  }

}
