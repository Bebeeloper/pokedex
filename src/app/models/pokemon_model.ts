export interface Pokemon {
  id: string,
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
