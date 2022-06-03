import { Component } from '@angular/core';
import { User } from '../../interface/user.interface';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {

  usuarios: User[] = [];

  constructor(public userService: UserService) {
    this.getAllUsers();
   }

  getAllUsers(){
    this.userService.getAll().subscribe((data)=>{              
      this.usuarios = data;         
   },
   (err)=>{ 
       this.usuarios = [];  
    });
  }
}