import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  showPassword: boolean = false;

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    pwdConfirmation: new FormControl('', Validators.required)
  });

  constructor(http: HttpClient) {}

  passwordsMismatch(): boolean {
    const password: string = this.signUpForm.get('password').value;
    const pwdConfirmation: string = this.signUpForm.get('pwdConfirmation').value;
    return password !== pwdConfirmation;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (this.passwordsMismatch() || !this.signUpForm.get('username').valid) {
      return;
    }
    
    this.registerRequest(
      this.signUpForm.get('username').value,
      this.signUpForm.get('password').value,
      this.signUpForm.get('pwdConfirmation').value
    );
  }

  private registerRequest(username: string, password: string, pwdConfirmation: string) {
    console.log(username);
    console.log(password);
    console.log(pwdConfirmation);
  }
}
