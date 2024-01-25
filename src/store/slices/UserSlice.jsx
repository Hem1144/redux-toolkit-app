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
    deleteUsers(state, action) {},
  },
});

export const { addUser, removeUser, deleteUsers } = userSlice.actions; //* exporting action creators
export default userSlice.reducer;
