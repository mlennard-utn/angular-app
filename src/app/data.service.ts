import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { 
    
  }

  public login(usuario : Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(usuario);
    try {
      this.http.post('http://localhost:8080/login', usuario, httpOptions).subscribe(
        res => {
          console.log(res);
        }
      );
    }catch (err){
      console.log(err);
    }
    
  }

  public getNacionalidades() :Observable<any> {
    return this.http.get('http://localhost:8080/nacionalidades');
  }

}
