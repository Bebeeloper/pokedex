import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon_model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from 'src/app/models/pokemon_model';
import { Characters } from 'src/app/models/pokemon_model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
    .subscribe((data: Pokemons) => {
      for (const pokemon of data.results) {
        this.pokemonService.getPokemonsEndpoints(pokemon.url)
        .subscribe((dataEndpoints: Characters) => {
          console.log(dataEndpoints.name);
        });
      }
    });
  }

}
