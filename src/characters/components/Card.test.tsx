import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counselor, King, Knight, Squire } from "../models/character";
import { Card } from "./Card";

jest.mock("../hooks/use.characters");
describe("Given a Card Component", () => {
  describe("When it is instantiated", () => {
    render(
      <Card
        item={{} as King | Knight | Counselor | Squire}
        handleKill={jest.fn()}
      ></Card>
    );
    const element = screen.getByRole("listitem");
    test("Then it should be in the component", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
