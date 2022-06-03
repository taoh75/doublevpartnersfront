import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { UserformComponent } from './pages/userform/userform.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    UserformComponent
  ],
  exports: [
    UserComponent,
    UserformComponent
  ],
  imports: [
    CommonModule,    
    RouterModule,
    FormsModule
  ]
})
export class UserModule { }
