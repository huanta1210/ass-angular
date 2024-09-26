import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Auth } from '../pages/register/register.component';
interface User {
  id: string;
  userName: string;
  role: string;
}
interface AuthToken {
  accessToken: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  handleRegister(data: Auth) {
    return this.http.post('http://localhost:8000/api/auth/register', data);
  }
  handleLogin(data: Auth) {
    return this.http.post<AuthToken>(
      'http://localhost:8000/api/auth/login',
      data
    );
  }
  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
