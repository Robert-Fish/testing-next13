import { getPokemonByType, getPokemonTypes } from "@/server/fetch";
import Link from "next/link";
import React, { ReactNode } from "react";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function PokemonList({
  params,
}: {
  params: { type: string };
}) {
  const pokemonList = await getPokemonByType(params.type);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {pokemonList.pokemon?.map(({ pokemon: { name } }) => (
        <Link href={`/pokemon/${name}`}>
          <div
            className="bg-white p-3 text-center drop-shadow-md hover:bg-red-500 hover:text-white transition-all"
            key={name}
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
}
