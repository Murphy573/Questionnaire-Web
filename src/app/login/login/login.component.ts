import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginDataService} from '../../shared/data-cache/login-data.service';
import {SignInService} from '../../sign-in/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  validateForm: FormGroup;

  errorMsg: string;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(this.validateForm.valid){
      this.si.login(this.validateForm.value).subscribe(
        data => {
          if(data === 'true'){
            this.lg.setLoginFlag();
            this.route.navigate(['main']);
          }
          else {
            this.errorMsg = data;
          }
        }
      );

    }
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private lg: LoginDataService,
    private si: SignInService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });

    this.lg.removeLoginFlag();
  }

}
