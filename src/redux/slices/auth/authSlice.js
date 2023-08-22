import { createSlice } from "@reduxjs/toolkit";
import { asyncAuth } from "./authService";

const initialState = {
  role: "guest",
  token: null,
  isAuth: false,
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth(state, { payload }) {
      state.token = payload.token;
      state.role = payload.role;
      state.isAuth = payload.isAuth;
    },
  },
  extraReducers: {
    [asyncAuth.pending]: (state) => {
      state.status = "loading";
    },
    [asyncAuth.fulfilled]: (state, { payload }) => {
      state.token = payload?.token;
      state.role = payload?.role;
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions; // dispatch
export const authReducer = authSlice.reducer;
