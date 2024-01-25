import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    },
    removeUser(state, action) {
      return state.filter((user, id) => id !== action.payload);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.clearAllUsers, () => {
      return [];
    });
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions; //* exporting action creators
export default userSlice.reducer;
