/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const getFetchedUsers = createAsyncThunk(
  'users/fetchUserData',
  async (thunkAPI) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.results;
    } catch (err) {
      return thunkAPI.rejectWithValue("Something's not quite right...");
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFetchedUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFetchedUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getFetchedUsers.rejected, (state) => {
      state.error = "Something's not quite right..."
      state.isLoading = false;
    })
  },
});

export default usersSlice.reducer;
