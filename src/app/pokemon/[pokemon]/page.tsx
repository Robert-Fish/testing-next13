import { getPokemonByName } from "@/server/fetch";
import Link from "next/link";
import React, { ReactNode } from "react";

export default async function PokemonDetail({
  params,
}: {
  params: { pokemon: string };
}) {
  const pokemonDetails = await getPokemonByName(params.pokemon);

  return (
    <div className="bg-white m-3 rounded-md p-5 shadow-md">
      <Link href="/">Back</Link>
      <h2 className="text-2xl mt-2 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate capitalize">
        {pokemonDetails.name}
      </h2>
      <h3 className="text-lg mt-2 text-gray-500">Abilities</h3>
      {pokemonDetails.abilities.map((ability) => (
        <li>{ability.ability.name}</li>
      ))}
    </div>
  );
}
