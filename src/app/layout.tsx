import { getPokemonTypes } from "@/server/fetch";
import Link from "next/link";
import { ReactNode } from "react";
import "../../styles/globals.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pokemonTypes = await getPokemonTypes();

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex min-h-screen overflow-auto">
        <main className="flex-shrink w-1/12">
          <ul>
            {pokemonTypes.results.map(({ name }) => (
              <Link key={name} href={`type/${name}`}>
                <li className="text-center uppercase hover:underline hover:text-red-600 py-2">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </main>
        <section className="flex-grow bg-gray-100 w-11/12">{children}</section>
      </body>
    </html>
  );
}
