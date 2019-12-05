import React, {useState, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInserts';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "HTML",
      checked: true,
    },
    {
      id: 2,
      text: "CSS",
      checked: false,
    },
    {
      id: 3,
      text: "React",
      checked: true,
    },
  ]);

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }, [todos],
  )

  const generateID = (todos ? todos.length + 1 : 1);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: generateID,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
    }, [generateID, todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
}

export default App;
