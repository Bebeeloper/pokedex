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
        },
        home: {
          front_default: ''
        },
        dream_world: {
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

  constructor() {
<<<<<<< HEAD
    // console.log("Types: ", this.pokemon.types[0].type);
   }
=======
    console.log("Types: ", this.pokemon.types[0].type);
  }
>>>>>>> uichanges

  ngOnInit(): void {
  }

}
