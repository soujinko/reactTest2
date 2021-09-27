import React from 'react';

import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { TodosContextProvider } from './contexts/todoContext';

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <TodoForm/>
      <TodoList/>
      </TodosContextProvider>


  )
};

export default App;