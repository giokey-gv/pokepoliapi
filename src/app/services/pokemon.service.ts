import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Con esto se Obtiene el Pokemon
  getPokemons(index: number){
    return this.http.get<any>('${this.baseUrl}/pokemon/${index}');
  }
  
}
