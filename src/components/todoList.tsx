import React from 'react';
import TodoItem from './todoItem';
import {useTodosState} from '../contexts/todoContext'

function TodoList () {
    const todos = useTodosState();
    return (
        <ul>
            {
                todos.map(todo =>( 
                    <TodoItem todo={todo} key={todo.id} />
                ))
            }
        </ul>
    )
}

export default TodoList;