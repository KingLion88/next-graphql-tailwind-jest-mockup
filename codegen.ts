import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql", // your local GraphQL API
  documents: ["src/app/lib/queries/**/*.graphql"],     // where to look for queries
  generates: {
    "./src/app/lib/graphql/generated/": {
      preset: "client",                        // generates hooks + types
      plugins: [],
    },
  },
};

export default config;