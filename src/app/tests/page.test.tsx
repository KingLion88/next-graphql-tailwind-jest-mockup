import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import { GraphQLClient } from "graphql-request";
import { GetCountriesQuery } from "../lib/graphql/generated/graphql";

// Mock GraphQLClient
jest.mock("graphql-request", () => {
  return {
    GraphQLClient: jest.fn().mockImplementation(() => {
      return {
        request: jest.fn().mockResolvedValue({
          countries: [
            { code: "US", name: "United States", emoji: "🇺🇸" },
            { code: "CA", name: "Canada", emoji: "🇨🇦" },
          ],
        } as GetCountriesQuery),
      };
    }),
  };
});

describe("HomePage SSR GraphQL", () => {
  it("renders countries from GraphQL", async () => {
    const ui = await HomePage(); // SSR async
    render(ui);

    expect(await screen.findByText(/United States/)).toBeInTheDocument();
    expect(screen.getByText(/Canada/)).toBeInTheDocument();
  });
});
