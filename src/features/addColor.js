import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const LIMIT = 6;
const addColorSlice = createSlice({
  name: "addColorSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.length < LIMIT) {
        state.items.push(action.payload);
      } else {
        toast.error("Reached max limit of colors!", {
          position: "top-left",
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.color !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = addColorSlice.actions;
export default addColorSlice.reducer;
