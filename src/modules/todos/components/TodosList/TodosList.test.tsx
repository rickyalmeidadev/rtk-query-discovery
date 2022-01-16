import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { makeStore } from '../../../../store';
import { TodosList } from './TodosList';

type Props = {
  children: ReactNode;
};

const wrapper = ({ children }: Props) => {
  const store = makeStore();
  return <Provider store={store}>{children}</Provider>;
};

it('renders correctly', () => {
  const screen = render(<TodosList />, { wrapper });
});
