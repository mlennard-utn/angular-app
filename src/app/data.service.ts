import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nacionalidades = new BehaviorSubject<any>([ 
    { id: 1, nacionalidad : 'argentino'  }, 
    { id: 2, nacionalidad : 'venezolano'  } , 
    { id: 3, nacionalidad : 'aleman'  }
  ]);
  nacionalidad = this.nacionalidades.asObservable();

  constructor() { }

  agregarNacionalidad(nac) {
    this.nacionalidades.next(nac);
  }

}
