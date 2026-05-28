// this is for my redux configuration

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    clickCounter: counterReducer,
  },
});