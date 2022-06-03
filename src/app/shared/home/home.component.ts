import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/interface/user.interface';
import { UserService } from 'src/app/user/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  isUserLogged: boolean = false;

  isErrLogin: boolean = false;

  userHome: User = {
    id: 0,
    loguser: '',
    pass: '',
    createdAt: ''
  }; 

  userResponse: User = {
    id: 0,
    loguser: '',
    pass: '',
    createdAt: ''
  }
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.verificarUsuario();
  }

  loginUser(){         
    this.userService.loginUser(this.userHome).subscribe((userData)=>{ 
      localStorage.setItem('userLogged',JSON.stringify(userData));
      this.userResponse = userData;
      if (userData.id > 0){
        this.verificarUsuario();      
      }else{
        this.isErrLogin=true; 
        setTimeout(()=>{ this.isErrLogin=false; },3000)
      }
    },(errorLogin)=>{       
      this.isErrLogin = true; 
      setTimeout(()=>{ this.isErrLogin=false; },3000)
    });    
  }

  verificarUsuario() {    
    this.isUserLogged = this.userService.verifUser();       
  }

}