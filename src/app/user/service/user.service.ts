import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../user/interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userurl: string = 'http://localhost:50100/api/users';

  user: User = {
    id: 0,
    loguser: '',
    pass: '',
    createdAt: ''
  }; 

  private httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'      
    })
  };
  
  constructor(public http: HttpClient) { }
  
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.userurl, this.httpOptions);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.userurl+`/${id}`, this.httpOptions);
  }

  newUser(usuario: User): Observable<User>{    
    return this.http.post<User>(this.userurl, usuario);
  }

  updateUser(usuario: User): Observable<User>{
    return this.http.put<User>(this.userurl+`/${usuario.id}`, usuario);
  }

  deleteUser(iduser: number): Observable<User>{
    return this.http.delete<User>(this.userurl+`/${iduser}`, this.httpOptions);
  }

  loginUser(userLog: User): Observable<User>{
    return this.http.post<User>('http://localhost:50100/api/login', userLog);
  } 

  verifUser():boolean{    
    let usrStr: string = localStorage.getItem('userLogged'); 
    let usrLogged: User;    
    if ((usrStr!='')&&(usrStr!=undefined)&&(usrStr!=null)){
      usrLogged = JSON.parse(usrStr);     
      if (usrLogged.id > 0){
        return true;
      }else{
        return false;
      }      
    }else{
      return false;
    }    
  }
}