import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private Url:string="https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }


  buscarPais(nombre:string):Observable<Country[]>{    
    const url = "https://restcountries.com/v3.1/name/"+nombre;
    return this.http.get<Country[]>(url);
  }

  

}
