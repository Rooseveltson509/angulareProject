import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';
import { SnackBarOverviewExample } from '../snackBar/snackBarOpen';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private _snackBar: MatSnackBar,
              private state: StateService) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    this.loading = true;
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.auth.login(email, password).then(
      () => {
        this.loading = false;
        this.openSnackBar("Connected...", "successful");
        this.router.navigate(['/all-stuff']);
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.openSnackBar("ERROR: "+error.error.msg, "ERROR");
        //this.errorMessage = error.message;
      }
    );
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
