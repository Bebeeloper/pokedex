import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, Pokemons } from 'src/app/models/pokemon_model';

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
        .subscribe((dataEndpoints: Pokemon) => {
          // console.log(dataEndpoints.sprites.other['official-artwork'].front_default);
          console.log(dataEndpoints);

          this.pokemons.push(dataEndpoints);
        });
      }
    });
  }

}
