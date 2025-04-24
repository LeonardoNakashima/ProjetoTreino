import { Routes } from '@angular/router';
import { LaboratorioGerminaresComponent } from './auth/laboratorio-germinares/laboratorio-germinares.component';
import { HeaderComponent } from './layout/header/header.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent, children: [{ path: 'laboratorio-germinares', component: LaboratorioGerminaresComponent }] },
];