import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../../core/services/api.repository";
import { AllCharacters } from "../types/allCharacters";
import { consoleError } from "../../core/services/errors";

export function useCharacters() {
  const [characters, setCharacters] = useState<AllCharacters[]>([]);
  const characterUrl = "http://localhost:3000/characters/";

  const repo: ApiRepository<AllCharacters> = useMemo(
    () => new ApiRepository<AllCharacters>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacters = await repo.getAll();
    setCharacters(loadedCharacters);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleKill = async (character: AllCharacters) => {
    try {
      const killCharacter = await repo.update(character.id, {
        ...character,
        alive: false,
      });
      setCharacters(
        characters.map((item) =>
          item.id === character.id ? killCharacter : item
        )
      );
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    characters,
    handleKill,
  };
}
