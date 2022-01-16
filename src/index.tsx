import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Text>Open up App.tsx to start working on your app!</Text>
  </Provider>
);

export default App;
