import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from '~/services/api';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: middlewares => middlewares().concat(api.middleware),
  });

  return store;
};

const store = makeStore();

setupListeners(store.dispatch);

export default store;
