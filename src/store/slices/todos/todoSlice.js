import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = todoSlice.actions;
