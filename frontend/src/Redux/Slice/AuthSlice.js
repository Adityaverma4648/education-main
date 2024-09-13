import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Initial state for counter
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = authSlice.actions;

export default authSlice.reducer;
