import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export type Auth = {
  userName: string;
  email: string;
  password: string;
  role?: string;
};
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  authService = inject(AuthService);
  router = inject(Router);
  get userName() {
    return this.profileForm.get('userName');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
  onSubmit() {
    this.authService.handleRegister(this.profileForm.value as Auth).subscribe({
      next: () => {
        alert('Đăng kí thành công');
        this.router.navigateByUrl('/login');
      },
      error: () => alert('Đăng kí không thành công'),
    });
  }
}
