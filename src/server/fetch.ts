export const getCharacters = async () => {
  return (await (
    await fetch("https://swapi.dev/api/people")
  ).json()) as CharactersList;
};

export interface CharactersList {
  results: CharactersListResult[];
}

export interface CharactersListResult {
  name: string;
  url: string;
}

export const getShips = async () => {
  return (await (
    await fetch("https://swapi.dev/api/starships")
  ).json()) as SpaceshipList;
};

export interface SpaceshipList {
  results: SpaceshipListResult[];
}

export interface SpaceshipListResult {
  name: string;
  url: string;
  manufacturer: string;
}
