import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    },
    removeUser(state, action) {
      return state.filter((user, index) => index !== action.payload);
    },
    //! to clear all users without using extraReducers
    // clearAllUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export const { addUser, removeUser } = userSlice.actions; //* exporting action creators
export default userSlice.reducer;
