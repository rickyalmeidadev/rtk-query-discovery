import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { rest } from 'msw';
import { server } from '../../../../mocks/server';
import { todos } from '~/mocks/todos';
import { makeStore } from '~/store';
import { TodosList } from './';

type Props = {
  children: ReactNode;
};

const wrapper = ({ children }: Props) => {
  const store = makeStore();
  return <Provider store={store}>{children}</Provider>;
};

it('renders the fetched todos', async () => {
  const screen = render(<TodosList />, { wrapper });
  const slice = todos.slice(0, 10);
  const promises = slice
    .slice(0, 10)
    .map(todo => screen.findByText(new RegExp(todo.title, 'i')));
  const elements = await Promise.all(promises);
  expect(elements.length).toBe(slice.length);
  elements.forEach(element => expect(element).toBeTruthy());
});

it('renders the error message', async () => {
  const message = 'Something went wrong';
  server.use(
    rest.get(
      'https://jsonplaceholder.typicode.com/todos',
      (request, response, context) =>
        response(
          context.status(500),
          context.json({ message: 'Something went wrong' }),
        ),
    ),
  );
  const screen = render(<TodosList />, { wrapper });
  const element = await screen.findByText(new RegExp(message, 'i'));
  expect(element).toBeTruthy();
});

it('crosses out completed todos', async () => {
  const screen = render(<TodosList />, { wrapper });
  const slice = todos.slice(0, 10);
  const promises = slice
    .slice(0, 10)
    .map(todo => screen.findByText(new RegExp(todo.title, 'i')));
  const elements = await Promise.all(promises);
  elements.forEach((element, index) => {
    expect(element).toHaveStyle({
      textDecorationLine: slice[index].completed ? 'line-through' : 'none',
    });
  });
});
