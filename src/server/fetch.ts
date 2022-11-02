import Pokedex, { Type } from "pokedex-promise-v2";

export const getPokemonTypes = async () => {
  const P = new Pokedex();

  try {
    return await P.getTypesList();
  } catch (error) {
    throw error;
  }
};

export const getPokemonByType = async (type: string) => {
  const P = new Pokedex();
  return (await P.getTypeByName(type)) as Type;
};

export const getPokemonByName = async (name: string) => {
  const P = new Pokedex();
  return (await P.getPokemonByName(name)) as PokemonDetail;
};

export interface PokemonDetail {
  name: string;
  height: number;
  abilities: PokemonAbility[];
}

export interface PokemonAbility {
  ability: PokemonAbilityDetail;
}

export interface PokemonAbilityDetail {
  name: string;
}

export interface TypeResults {
  results: TypeResult[];
}

export interface PokemonByTypeResults {
  pokemon?: PokemonByTypeResult[];
}

export interface PokemonByTypeResult {
  pokemon: PokemonByTypeResultPokemon;
}

export interface PokemonByTypeResultPokemon {
  name: string;
}

export interface TypeResult {
  name: string;
  url: string;
}
