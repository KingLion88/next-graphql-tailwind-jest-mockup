import { client } from "./lib/graphql-client";
import { GetCountriesDocument, GetCountriesQuery } from "./lib/graphql/generated/graphql";

export default async function HomePage() {
  // SSR fetch from local GraphQL API
  const data = await client.request<GetCountriesQuery>(GetCountriesDocument);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Next App</h1>
      <ul className="space-y-1">
        {data.countries.map((c: any) => (
          <li key={c.code}>
            {c.emoji} {c.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
