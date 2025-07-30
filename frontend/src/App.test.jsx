import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Main } from "./main";
import "@testing-library/jest-dom";

test("renders landing home page route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getByText(/todo/i)).toBeInTheDocument();
});

test("renders dashboard route", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
