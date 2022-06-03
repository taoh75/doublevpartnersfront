import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  verificarUsuario():boolean {
    return this.userService.verifUser();
  }

  logout(){
    localStorage.removeItem('userLogged');
    window.location.reload();
  }

}
