import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PersonFormComponent } from './person/pages/person-form/person-form.component';
import { PersonComponent } from './person/pages/person/person.component';
import { HomeComponent } from './shared/home/home.component';
import { UserComponent } from './user/pages/user/user.component';
import { UserformComponent } from './user/pages/userform/userform.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'person',
    component: PersonComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  {
    path: 'person/create',
    component: PersonFormComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },  
  {
    path: 'person/:id',
    component: PersonFormComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  {
    path: 'user/new',
    component: UserformComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard],canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserformComponent,
    pathMatch: 'full',
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
