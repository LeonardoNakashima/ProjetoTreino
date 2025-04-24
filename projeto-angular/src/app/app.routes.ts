import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent}
];