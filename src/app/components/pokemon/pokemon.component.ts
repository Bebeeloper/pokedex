import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon_model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    sprites: {
      other: {
        "official-artwork": {
          front_default: ''
        }
      }
    },
    types: [{
      type: {
        name: '',
        url: ''
      }
    }],
    height: 0,
    weight: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
