import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { FotosComponent } from './fotos/fotos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "usuarios", component: UsuariosComponent},
    {path: "login", component: LoginComponent},
    {path: "fotos", component: FotosComponent},
    {path: "home", component: HomeComponent}
];