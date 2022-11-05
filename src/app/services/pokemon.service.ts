import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Pokemons } from '../models/pokemon_model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(){
    // return this.http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon?limit=1154');
    return this.http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonsEndpoints(pokemonsEndpoints: string){
    return this.http.get<Pokemon>(pokemonsEndpoints);
  }

}
