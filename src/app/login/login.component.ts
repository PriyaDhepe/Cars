import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginedUser: any;
  registrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: CarService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    let obj = this.registrationForm.value;
    this.service.postlogindata(obj).subscribe(
      (res: any) => {
        this.loginedUser = res;
        this.toastr.success('login successfully');
        this.router.navigateByUrl('/dashboard');

        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
