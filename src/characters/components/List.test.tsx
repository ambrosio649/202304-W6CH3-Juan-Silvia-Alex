import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";

describe("Given a List Component", () => {
  describe("When it is instantiated", () => {
    render(<List></List>);
    const element = screen.getByRole("list");
    test("Then it should be in the component", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
