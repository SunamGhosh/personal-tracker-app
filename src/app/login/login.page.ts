import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Common form fields
  username = '';
  password = '';

  // Register-specific fields
  name = '';

  isLogin = true; // Toggle between login and register

  constructor(private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.username = '';
    this.password = '';
    this.name = '';
  }

 login() {
  if (this.username && this.password) {
    if (this.isLogin) {
      // Login mode: retrieve name from localStorage or fallback
      const savedName = localStorage.getItem('username') || this.username;
      localStorage.setItem('username', savedName); // just to keep it consistent
      this.router.navigate(['/home']);
    } else {
      // Register mode: save the name and username
      if (this.name) {
        localStorage.setItem('username', this.name);
        alert('Registered successfully! Now please login.');
        this.toggleForm();
      } else {
        alert('Please enter your full name to register.');
      }
    }
  } else {
    alert('Please enter username and password');
  }
}


  register() {
    if (this.name && this.username && this.password) {
      alert('Registered successfully! Now please login.');
      this.toggleForm();
    } else {
      alert('Please fill all registration fields');
    }
  }
}
