import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string = '';
  public apellido: string = '';
  public idNacionalidad: number = 1;

  public nacionalidades = [ 
    { id: 1, nacionalidad : 'argentino'  }, 
    { id: 2, nacionalidad : 'venezolano'  } , 
    { id: 3, nacionalidad : 'aleman'  }
  ];

  constructor( private _data: DataService ) {
   
  }

  ngOnInit() {
    this._data.nacionalidad.subscribe(
      res => {
        this.nacionalidades = res
    });
  }

  public enviar() :void {
    console.log("Se recibio nombre: " + this.nombre + " apellido: " + this.apellido + this.idNacionalidad );
  }


}
