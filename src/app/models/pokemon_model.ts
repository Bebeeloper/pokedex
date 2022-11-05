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
  home: Home;
  dream_world: DreamWorld;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Home{
  front_default: string;
}

export interface DreamWorld{
  front_default: string;
}

export interface Type {
  type: Species;
}

export interface Species {
  name: string;
  url:  string;
}




