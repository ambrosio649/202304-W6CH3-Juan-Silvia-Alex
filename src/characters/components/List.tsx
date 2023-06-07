import { useEffect } from "react";
import { useCharacters } from "../hooks/use.characters";
import { AllCharacters } from "../types/allCharacters";
import { Card } from "./Card";

export function List() {
  const { characters, handleLoad } = useCharacters();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        {characters.characters.map((item: AllCharacters) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </ul>
    </div>
  );
}
