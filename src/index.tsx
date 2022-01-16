import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { TodosList } from './modules/todos/components/TodosList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <TodosList />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
