import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react';

import { TodoEdit } from './TodoEdit';
import { Todo } from './Todo';
import { todoContext } from './TodoStore';


export const TodoList: React.FC = observer(() => {
    const todoStore = useContext(todoContext);
    const [editKey, setEditKey] = useState<number>();

    const unmountEditField = () =>{
        setEditKey(0);
    }
    const editTodo = (todoKey: number) => {
        setEditKey(todoKey);
    }

    return <div>
        {todoStore.todos.map(todo => (
            <div>
            { todo.title } / { todo.finished ? "true" : "false" } / <button onClick={ () => editTodo(todo.key) }>Bearbeiten</button>
            { todo.key === editKey ? <TodoEdit todo={ todo } unmount={ unmountEditField } /> : '' }
            </div>
        ))}
    </div>
})
