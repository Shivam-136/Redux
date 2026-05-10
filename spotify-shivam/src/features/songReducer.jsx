// songReducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
};

const songSlice = createSlice({
  name: "music",

  initialState,

  reducers: {
    addSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },

    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { addSong, togglePlay } = songSlice.actions;

export default songSlice.reducer;