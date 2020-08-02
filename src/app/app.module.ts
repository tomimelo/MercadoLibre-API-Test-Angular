import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PersonalComponent } from './pages/perfil/personal/personal.component';
import { ProductsComponent } from './pages/perfil/products/products.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    NavbarComponent,
    PerfilComponent,
    SidebarComponent,
    PersonalComponent,
    ProductsComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
