import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRepository } from "../../core/services/api.repository";
import { AllCharacters } from "../types/allCharacters";

export const loadCharactersAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<AllCharacters>) => {
    return await repo.getAll();
  }
);

export const killCharactersAsync = createAsyncThunk<
  AllCharacters,
  {
    repo: ApiRepository<AllCharacters>;
    character: AllCharacters;
  }
>("characters/update", async ({ repo, character }) => {
  return await repo.update(character.id, { ...character, alive: false });
});
