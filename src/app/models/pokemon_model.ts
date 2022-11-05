export interface Pokemon {
  id: number,
  name: string,
  image: string,
  price: number
}

export interface Pokemons {
  results: Results[];
}

export interface Results{
  name: string,
  url: string
}

export interface Characters {
  height:                   number;
  id:                       number;
  name:                     string;
  sprites:                  Sprites;
  types:                    Type[];
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
  slot: number;
  type: Species;
}

export interface Species {
  name: string;
  url:  string;
}





export interface OfficialArtwork {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}




