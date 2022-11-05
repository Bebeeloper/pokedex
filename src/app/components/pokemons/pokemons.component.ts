import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon_model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from 'src/app/models/pokemon_model';

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
      console.log(data.results[0].name);

      for (const pokemon of data.results) {
        this.pokemonService.getPokemonsEndpoints(pokemon.url)
        .subscribe((dataEndpoints: any) => {
          console.log(dataEndpoints);
        });
      }

    });
  }

}
