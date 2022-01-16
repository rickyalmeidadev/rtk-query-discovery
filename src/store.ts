import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import todos from './modules/todos/services';

const store = configureStore({
  reducer: {
    [todos.reducerPath]: todos.reducer,
  },
  middleware: middlewares => middlewares().concat(todos.middleware),
});

setupListeners(store.dispatch);

export default store;
