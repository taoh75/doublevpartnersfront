import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './pages/person/person.component';
import { PersonFormComponent } from './pages/person-form/person-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonComponent,
    PersonFormComponent
  ],
  exports: [
    PersonComponent,
    PersonFormComponent
  ],
  imports: [    
    CommonModule,    
    RouterModule,
    FormsModule
  ]
})
export class PersonModule { }
