import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interface/user.interface';
import { UserService } from '../../service/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styles: [
  ]
})
export class UserformComponent implements OnInit {

  isguardado: boolean = false; 

  iserror: boolean = false; 

  usuario: User={
    id: 0,
    loguser: '',
    pass: '',
    createdAt: ''
  };
  
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params    
      .pipe(
        switchMap(({id}) => this.userService.getUserById(id))
      )    
    .subscribe((userData)=>{      
      this.usuario=userData;
    });
  }

  guardaUsuario(){    
    if (this.usuario.id==0){
      this.usuario.createdAt=new Date();      
      this.userService.newUser(this.usuario).subscribe((userData)=>{ 
        this.isguardado = true; 
        this.usuario=userData;  
        setTimeout(()=>{ this.isguardado=false; },3000);      
      },(err)=>{ 
        this.iserror = true;
        setTimeout(()=>{ this.iserror=false; },3000);      
      });
    }else{
      this.userService.updateUser(this.usuario).subscribe((userData)=>{           
        this.isguardado = true; 
        this.usuario=userData;  
        setTimeout(()=>{ this.isguardado=false; },3000);     
      });
    }
  }

  eliminar(){
    this.userService.deleteUser(this.usuario.id).subscribe((userData)=>{           
        this.router.navigate(['/user']);
    });
  }
}