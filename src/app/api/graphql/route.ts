import { createSchema, createYoga } from "graphql-yoga";

const typeDefs = /* GraphQL */ `
  type Country {
    code: String!
    name: String!
    emoji: String!
  }

  type Query {
    countries: [Country!]!
  }
`;

const resolvers = {
  Query: {
    countries: () => [
      { code: "US", name: "United States", emoji: "🇺🇸" },
      { code: "CA", name: "Canada", emoji: "🇨🇦" },
      { code: "JP", name: "Japan", emoji: "🇯🇵" },
      { code: "FR", name: "France", emoji: "🇫🇷" },
      { code: "BR", name: "Brazil", emoji: "🇧🇷" },
    ],
  },
};

const { handleRequest } = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/api/graphql",
});

export { handleRequest as GET, handleRequest as POST };