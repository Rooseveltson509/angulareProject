import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTechnoComponent } from './add-techno/add-techno.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyThingWithUploadComponent } from './things/modify-thing-with-upload/modify-thing-with-upload.component';
import { NavComponent } from './nav/nav.component';
import { NewThingWithUploadComponent } from './things/new-thing-with-upload/new-thing-with-upload.component';
import { RegisterComponent } from './register/register.component';
import { SingleThingComponent } from './single-thing/single-thing.component';
import { StuffListComponent } from './stuff-list/stuff-list.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
//children: [
  { path: 'new-thing', component: NewThingWithUploadComponent },
  { path: 'add-techno', component: AddTechnoComponent },
  { path: 'all-stuff', component: StuffListComponent },
  { path: 'thing/:id', component: SingleThingComponent},
  { path: 'modify-thing/:id', component: ModifyThingWithUploadComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', redirectTo: 'all-stuff' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
