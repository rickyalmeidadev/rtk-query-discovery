import api from '~/services/api';
import { Todo } from './types';

const todos = api.injectEndpoints({
  endpoints: build => ({
    getTodos: build.query<Todo[], void>({
      query: () => '/todos',
    }),
  }),
});


export default todos;
