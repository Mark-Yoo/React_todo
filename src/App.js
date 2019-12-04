import React, {useState} from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
