import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  private formB = inject(FormBuilder);
  private authServices = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.formB.group({
    name: ['tutu', [Validators.required, Validators.minLength(2)]],
    email: ['CinTutuDev@gmail.com', [Validators.required, Validators.email]],
    password: ['789456', [Validators.required, Validators.minLength(6)]],
  });

  register() {
    const { name, email, password } = this.myForm.value;

    this.authServices.register(name, email, password).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to try again?',
          icon: 'error',
          imageUrl: 'https://unsplash.it/400/200',

          confirmButtonText: 'Return',
          backdrop: `
                    rgba(0,0,123,0.4)

                    left top
                    no-repeat`,
        });
      },
    });
  }
}
