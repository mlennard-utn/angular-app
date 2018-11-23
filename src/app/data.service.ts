import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nacionalidades = new BehaviorSubject<any>([]);
  nacionalidad = this.nacionalidades.asObservable();

  constructor(private http: HttpClient ) { 
    this.http.get('http://localhost:8080/nacionalidades').subscribe( (informacionServidor: any) => {
      console.log(informacionServidor);
      this.nacionalidades = informacionServidor;
      for (let nac of informacionServidor) {
        this.agregarNacionalidad(nac);    
      }
    });
  }

  agregarNacionalidad(nac) {
    this.nacionalidades.next(nac);
  }



}
