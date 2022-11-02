export const getPokemonTypes = async () => {
  return (await (
    await fetch("https://pokeapi.co/api/v2/type")
  ).json()) as TypeResults;
};

export const getPokemonByType = async (type: string) => {
  const respose = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (respose.ok) {
    return respose.json() as PokemonByTypeResults;
  }
  return [] as PokemonByTypeResults;
};

export const getPokemonByName = async (name: string) => {
  return (await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  ).json()) as PokemonDetail;
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
