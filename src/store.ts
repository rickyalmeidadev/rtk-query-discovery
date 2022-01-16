import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import todos from './modules/todos/services';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [todos.reducerPath]: todos.reducer,
    },
    middleware: middlewares => middlewares().concat(todos.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

const store = makeStore();

export default store;
