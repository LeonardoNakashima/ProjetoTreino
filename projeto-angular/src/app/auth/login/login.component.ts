import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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

