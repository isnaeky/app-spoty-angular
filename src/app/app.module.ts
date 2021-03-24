import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoandingComponent } from './components/shared/loanding/loanding.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { DirectiveComponent } from './components/directive/directive.component';
//Servicios

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagenPipe,
    TarjetasComponent,
    DomseguroPipe,
    LoandingComponent,
    ErrorComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
