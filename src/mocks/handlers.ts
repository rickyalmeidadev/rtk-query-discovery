import { rest } from 'msw';
import { todos } from './todos';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/todos',
    (request, response, context) =>
      response(context.status(200), context.json(todos)),
  ),
];
