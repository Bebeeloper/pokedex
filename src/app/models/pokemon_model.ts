export interface Pokemons {
  results: Results[];
}

export interface Results{
  name: string,
  url: string
}

export interface Pokemon {
  id:                       number;
  name:                     string;
  sprites:                  Sprites;
  types:                    Type[];
  height:                   number;
  weight:                   number;
}

export interface Sprites {
  other:             Other;
}

export interface Other {
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Type {
  type: Species;
}

export interface Species {
  name: string;
  url:  string;
}




