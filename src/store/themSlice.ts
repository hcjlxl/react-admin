import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  value: number;
  colorPrimary: string;
}

const initialState: ThemeState = {
  value: 0,
  colorPrimary: '#1677FF',
};

export const themSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    updatePrimaryColor: (state, action: PayloadAction<string>) => {
      state.colorPrimary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updatePrimaryColor } =
  themSlice.actions;

export default themSlice.reducer;
