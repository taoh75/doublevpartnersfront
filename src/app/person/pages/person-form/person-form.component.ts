import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../interface/person.interface';
import { PersonService } from '../../service/person.service';
import { switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styles: [
  ]
})
export class PersonFormComponent implements OnInit {

  guardado:boolean = false;
  hayerror:boolean = false;

  persona: Person = {
    id: 0,
    names: '',
    lastNames: '',
    dni: '',
    email: '',
    dniType: '',
    createdAt: ''
  };  

  idperson: number = 0;

  constructor(private personService: PersonService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  
  
  ngOnInit(): void {
    this.activatedRoute.params    
      .pipe(
        switchMap(({id}) => this.personService.encontrarPersona(id))
      )    
    .subscribe((personData)=>{
      this.persona=personData;
    });
  }  

  guardar(){
    if (this.persona.id==0){
      this.persona.createdAt=new Date();
      this.personService.crearPersona(this.persona).subscribe((personData)=>{
         this.persona=personData;
         this.guardado=true;
         setTimeout(()=>{ this.guardado=false }, 3000)
      },
      (error)=>{ 
        this.hayerror=true;
        setTimeout(()=>{ this.hayerror=false }, 3000)
      });      
    }else{
      this.personService.guardarPersona(this.persona).subscribe((personData)=>{
         this.persona=personData;
         this.guardado=true;
         setTimeout(()=>{ this.guardado=false }, 3000)
     });
    }    
  } 

  eliminar(){
    this.personService.borrarPersona(this.persona.id).subscribe((personData)=>{ 
      this.router.navigate(['/person']);
    });
  }

}
