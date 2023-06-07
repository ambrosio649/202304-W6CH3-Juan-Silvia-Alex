import { useCharacters } from "../hooks/use.characters";
import { Card } from "./Card";

export function List() {
  const { characters, handleKill } = useCharacters();

  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        {characters.map((item) => (
          <Card item={item} key={item.id} handleKill={handleKill}></Card>
        ))}
      </ul>
    </div>
  );
}
