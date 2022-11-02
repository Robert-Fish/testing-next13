export const getCharacters = async () => {
  return (await (
    await fetch("https://swapi.dev/api/people")
  ).json()) as CharactersList;
};

export interface CharactersList {
  results: Character[];
}

export interface Character {
  name: string;
  url: string;
  height: string;
  hair_color: string;
  birth_year: string;
  eye_color: string;
}

export const getCharacterDetails = async (id: number) => {
  return (await (
    await fetch(`https://swapi.dev/api/people/${id}`)
  ).json()) as Character;
};

export const getShips = async () => {
  return (await (
    await fetch("https://swapi.dev/api/starships")
  ).json()) as SpaceshipList;
};

export interface SpaceshipList {
  results: Spaceship[];
}

export interface Spaceship {
  name: string;
  url: string;
  manufacturer: string;
}
