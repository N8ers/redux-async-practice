import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Greeting Component", () => {
  test("renders prop content", () => {
    render(<Button color="primary" title="test button" />);

    const button = screen.getByText("test button");
    expect(button).toBeInTheDocument();
  });
  test("renders prop content snap", () => {
    render(<Button color="secondary" title="navigate back" />);

    const button = screen.getByText("navigate back");
    expect(button).toMatchSnapshot();
  });
});
