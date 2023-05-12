/** @format */

import { configureStore } from '@reduxjs/toolkit';
import usersSliceReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
});

export default store;
