import { useCallback, useMemo } from "react";
import { ApiRepository } from "../../core/services/api.repository";
import { AllCharacters } from "../types/allCharacters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store/store";
import { loadCharactersAsync } from "../redux/thunk";

export function useCharacters() {
  const characterUrl = "http://localhost:3000/characters/";

  const repo: ApiRepository<AllCharacters> = useMemo(
    () => new ApiRepository<AllCharacters>(characterUrl),
    []
  );

  const characters = useSelector((state: RootState) => state.characters);
  const dispatch: AppDispatch = useDispatch();

  const handleLoad = useCallback(() => {
    dispatch(loadCharactersAsync(repo));
  }, [repo, dispatch]);

  return {
    characters,
    handleLoad,
  };
}
