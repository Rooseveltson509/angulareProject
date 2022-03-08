import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  signupForm!: FormGroup;
  loading = false;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private _snackBar: MatSnackBar,
              private state: StateService) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSignup() {
    this.loading = true;
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    this.auth.createNewUser(email, password).then(
      () => {
        this.loading = false;
        this.openSnackBar("Account created", "successful");
        this.router.navigate(['all-stuff']);
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
