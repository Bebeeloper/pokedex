import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, Pokemons } from 'src/app/models/pokemon_model';
// const pokeball = require('../../resources/pokeball.png').default as string;

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnChanges {

  pokemons: Pokemon[] = [];
  pokemonsArray: Pokemon[] = [];
  pagNumber: number = 10;
  pageNumberAll: number = 1154;
  loading: boolean = false;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnChanges(changes: SimpleChanges) :void{
    console.log(changes);
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons(this.pagNumber)
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

    this.pokemonService.getAllPokemons(this.pageNumberAll)
    .subscribe((data: Pokemons) => {
      for (const pokemon of data.results) {
        this.pokemonService.getPokemonsEndpoints(pokemon.url)
        .subscribe((dataEndpoints: Pokemon) => {
          this.pokemonsArray.push(dataEndpoints);
        });
      }
    });

  }

  onScroll() {
    this.loading = true;
    let previousPageNumber: number = 0;
    this.pagNumber = this.pagNumber + 10;
    previousPageNumber = this.pagNumber - 10;

    console.log('Page number: ', this.pagNumber);
    console.log('previousPageNumber: ', previousPageNumber);

    console.log("scrolled!!");

    setTimeout(() => {
      for (const pokemon of this.pokemonsArray) {
        if(this.pokemonsArray.indexOf(pokemon) > previousPageNumber && this.pokemonsArray.indexOf(pokemon) <= this.pagNumber){
          this.pokemons.push(pokemon);
        }

      }
      this.loading = false;
    }, 1000);

  }
}
