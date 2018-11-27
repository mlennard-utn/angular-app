import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { 
    
  }

  public getNacionalidades() :Observable<any> {
    return this.http.get('http://localhost:8080/nacionalidades');
  }

}
