import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { HeaderComponent } from './layout/header/header.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent, children: [{ path: 'laboratorio-germinares', component: HomeComponent }] },
];