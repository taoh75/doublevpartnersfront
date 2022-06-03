import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { Person } from '../../interface/person.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {

  hayError: boolean = false;
  personas: Person[] = [];

  constructor(private personService: PersonService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
     
  }

  ngOnInit(){
    this.getAll();
  }
    
  getAll(){
    this.personService.buscarPersonas()
      .subscribe((resp) =>{         
        this.personas=resp;
        this.hayError=false; 
      }, 
      (err) =>{ 
        this.hayError=true; 
        this.personas=[];
      });
  }
  
}
