import { render, screen } from "@testing-library/react";
import Card from "../../../components/Card/Card";

describe("Default setup", () => {
  test("check init values", () => {
    render(<Card />);

    const card = screen.getByText("Count:");
    expect(card).toBeInTheDocument();
  });
  test("check init snap", () => {});
});

describe("Redux and reactivity", () => {
  test("increment button", () => {});
  test("decrement button", () => {});
});
