import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { HttpHeaders } from '@angular/common/http';
import { SaludoResponse } from './model/saludo';
import { SaludoRequest } from './model/saludado';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nombreUsuario = new BehaviorSubject('');
  nombre = this.nombreUsuario.asObservable();

  cambiarNombre(message: string) {
    this.nombreUsuario.next(message);
  }

  constructor(private http: HttpClient ) {
  }

  public login(usuario: Usuario): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const request: SaludoRequest = {
      'id' : usuario.nacionalidad,
      'saludado' : usuario.nombre + ' ' + usuario.apellido
    };

    return this.http.post('http://localhost:8080/saludo', request, httpOptions);
  }

  public getNacionalidades(): Observable<any> {
    return this.http.get('http://localhost:8080/nacionalidades');
  }





}
