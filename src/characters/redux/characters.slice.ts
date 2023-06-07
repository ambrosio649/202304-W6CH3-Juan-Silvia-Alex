import { createSlice } from "@reduxjs/toolkit";
import { AllCharacters } from "../types/allCharacters";
import { killCharactersAsync, loadCharactersAsync } from "./thunk";

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

    builder.addCase(killCharactersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: state.characters.map((item) => {
        return item.id === payload.id ? payload : item;
      }),
    }));
  },
});

export default sliceCharacters.reducer;
