import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiurl: string = 'http://localhost:50100/api/person';

  constructor(public http: HttpClient) {
     
   }

   private httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'      
    })
  };

  buscarPersonas(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiurl, this.httpOptions);
  }

  encontrarPersona(idperson: number): Observable<Person>{
    return this.http.get<Person>(this.apiurl+`/${idperson}`, this.httpOptions);
  }

  borrarPersona(idperson: number): Observable<any>{
    return this.http.delete<Person>(this.apiurl+`/${idperson}`, this.httpOptions);
  }

  crearPersona(persona: Person): Observable<Person>{
    return this.http.post<Person>(this.apiurl, persona);
  }

  guardarPersona(persona: Person): Observable<Person>{
    return this.http.put<Person>(this.apiurl+`/${persona.id}`, persona);
  }

}
