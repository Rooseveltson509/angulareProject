import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  public mode!: string;
  public part!: number;
  //public partString!: string;
  public isAuth!: boolean;

  private modeSub!: Subscription;
  private partSub!: Subscription;
  private isAuthSub!: Subscription;

  constructor(private state: StateService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.modeSub = this.state.mode$.subscribe(
      (mode) => {
        this.mode = mode;
      }
    );

    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  onBackToParts() {
    this.router.navigate(['all-stuff']);
  }

  ngOnDestroy() {
    this.modeSub?.unsubscribe();
    //this.partSub?.unsubscribe();
    this.isAuthSub?.unsubscribe();
  }

}
