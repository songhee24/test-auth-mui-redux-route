import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncRegister } from "../../../api/auth";

export const asyncAuth = createAsyncThunk(
  "auth/asyncAuth",
  async (userData) => {
    try {
      const data = await asyncRegister(userData);
      if (!data.ok) {
        const error = await data.text();
        throw new Error(error);
      }
      const result = await data.json();
      localStorage.setItem("MUI_LESSON@TOKEN", result?.token);
      return result;
    } catch (e) {
      alert(e);
    }
  }
); // function decoretor
