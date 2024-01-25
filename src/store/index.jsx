import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice.jsx";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
