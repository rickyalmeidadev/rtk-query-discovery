import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useGetTodosQuery } from '../../hooks';
import { Todo } from '../../types';

const keyExtractor = (todo: Todo) => todo.id.toString();

export const TodosList = () => {
  const { data } = useGetTodosQuery();

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item: todo }: { item: Todo }) => (
        <View>
          <Text
            style={[
              styles.todo,
              todo.completed ? styles.completed : styles.incompleted,
            ]}
          >
            • {todo.title}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 8,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  incompleted: {
    textDecorationLine: 'none',
  },
});
