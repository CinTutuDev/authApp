import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private formB = inject(FormBuilder);

  private authServices = inject(AuthService);

  public myForm: FormGroup = this.formB.group({
    email: ['CinTutuDev@gmail.com', [Validators.required, Validators.email]],
    password: ['789456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authServices.login(email, password).subscribe({
      next: () => console.log('todo bien'),
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to try again?',
          icon: 'error',
          imageUrl: 'https://unsplash.it/400/200',
          background: "#fff url(/images/trees.png)",
          confirmButtonText: 'Return',
          backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat`,
        });
      },
    });
  }
}
