// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import addColor from "../features/addColor";

const store = configureStore({
  reducer: {
    addColor,
  },
});

export default store;
