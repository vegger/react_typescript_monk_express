import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { TodoList } from './TodoList';
import { Todo } from './Todo';
import TodoSetter from './TodoSetter';
import { todoContext } from './TodoStore';


const TodoContainer: React.FC = observer(() => {
  return <div>
    <hr></hr>
    <TodoSetter/>
    <TodoList/>
    </div>;
})

export default TodoContainer;