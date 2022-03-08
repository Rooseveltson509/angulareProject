import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Thing } from '../models/Thing.model';
import { StuffService } from '../services/stuff.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-single-thing',
  templateUrl: './single-thing.component.html',
  styleUrls: ['./single-thing.component.scss']
})
export class SingleThingComponent implements OnInit, OnDestroy {

  public thing!: Thing;
  public loading!: boolean;
  public userId!: string | undefined;
  public part!: number;

  private partSub!: Subscription;

  constructor(private state: StateService,
              private router: Router,
              private route: ActivatedRoute,
              private stuffService: StuffService,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('single-thing');
    this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.stuffService.getThingById(params.id).then(
          (thing: any) => {
            this.loading = false;
            this.thing = thing;
          }
        );
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
        if (part >= 3) {
          this.userId = this.auth.userId;
        }
      }
    );
  }

  onGoBack() {
    this.router.navigate(['all-stuff']);
  }

  onModify() {
    this.router.navigate(['modify-thing/' + this.thing._id]);
  }

  onDelete() {
    this.loading = true;
    this.stuffService.deleteThing(this.thing._id).then(
      () => {
        this.loading = false;
        this.router.navigate(['all-stuff']);
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}
