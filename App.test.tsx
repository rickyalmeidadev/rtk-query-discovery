import { render } from '@testing-library/react-native';
import App from './App';

it('renders correctly', () => {
  const screen = render(<App />);
  const regexp = /open up app\.tsx to start working on your app!/i;
  expect(screen.getByText(regexp)).toBeTruthy();
});
