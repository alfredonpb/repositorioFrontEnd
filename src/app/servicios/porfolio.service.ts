import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  // Se inyecta el HttpClient
  constructor(private http:HttpClient) { }

  // Se creo este metodo de prueba
  // Y se define como observable para los componentes que lo consuman
  // puedan suscribirtse para esperar la resuesta

  obtenerDatos():Observable<any>{
    // console.log('El servico está corriendo');
    
    // se copia la ruta del json simulado
    return this.http.get('./assets/data/data.json');
  }
}
