import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  textoPersona = 'Aca va el codigo ___ de mi componente!!';
  
  constructor() { }

  ngOnInit() {
  }

}
