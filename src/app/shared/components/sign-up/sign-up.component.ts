import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username: string;
  password: string;
  pwdConfirmation: string;

  pwdError: boolean = true;

  constructor(http: HttpClient) {}

  register() {
    if (this.password !== this.pwdConfirmation) {

    }
  }

  private registerRequest() {

  }
}
