import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("aos", () => ({ init: jest.fn() }));

test("renders the portfolio's primary sections", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /hello, i am hari charhan/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /let’s work together/i })).toBeInTheDocument();
});
