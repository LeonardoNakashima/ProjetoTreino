import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent}
];