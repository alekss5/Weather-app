import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: [],
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});


export const selectWeather = (state) => state.weather.weather;
export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
