import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions; //* exporting action creators
export default userSlice.reducer;
