import { rest } from 'msw';
import { BASE_URL } from '~/services/api';
import { todos } from './todos';

export const handlers = [
  rest.get(`${BASE_URL}/todos`, (request, response, context) =>
    response(context.status(200), context.json(todos)),
  ),
];
