import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PersonalComponent } from './pages/perfil/personal/personal.component';
import { ProductsComponent } from './pages/perfil/products/products.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "auth", component: AuthComponent},
  {path: "perfil", component: PerfilComponent, 
    children: [
      {path: "", component: PersonalComponent},
      {path: "productos", component: ProductsComponent},

    ]
  },
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
