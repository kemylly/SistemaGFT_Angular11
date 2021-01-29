import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; //paginacao
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //filtro
import { OrderModule } from 'ngx-order-pipe'; //ordenação

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotoService } from './fotos/fotos.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    FotosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes, { useHash: false})]
  ],
  providers: [
    UsuariosService,
    FotoService,
    {provide: APP_BASE_HREF, useValue: '/'}, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
