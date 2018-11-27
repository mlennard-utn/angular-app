import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Nacionalidad } from 'src/app/model/nacionalidad';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string = '';
  public apellido: string = '';
  public idNacionalidad: number = 1;

  public nacionalidades : Nacionalidad[] = [];

  constructor( private _data: DataService ) {
    
  }

  ngOnInit() {
    this._data.getNacionalidades().subscribe(
      (res: any) => {
        console.log(res);
        this.nacionalidades = res;
    });
  }

  public enviar() :void {
    console.log("Se recibio nombre: " + this.nombre + " apellido: " + this.apellido + this.idNacionalidad );
  }


}
