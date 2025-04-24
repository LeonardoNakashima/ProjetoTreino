import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}


  fazerLogin(): void {
    // Aqui você validaria o login, e ao sucesso:
    this.router.navigate(['Home']); // navega para o filho 'home' do layout
  }
  fazerCadastro() {
    console.log("Cadastrado!")
  }
  
}

