import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRepository } from "../../core/services/api.repository";
import { AllCharacters } from "../types/allCharacters";

export const loadCharactersAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<AllCharacters>) => {
    return await repo.getAll();
  }
);

// export const killCharactersAsync = createAsyncThunk<
//   AllCharacters,
//   {
//     repo: ApiRepository<AllCharacters>;
//     id: number;
//   }
// >("characters/delete", async ({repo, id}) => {
//   return await repo.delete(id)
// })
