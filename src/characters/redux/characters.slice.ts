import { createSlice } from "@reduxjs/toolkit";
import { AllCharacters } from "../types/allCharacters";
import { loadCharactersAsync } from "./thunk";

export type CharacterState = {
  characters: AllCharacters[];
};

const initialState: CharacterState = {
  characters: [],
};

const sliceCharacters = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharactersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
  },
});

export default sliceCharacters.reducer;
