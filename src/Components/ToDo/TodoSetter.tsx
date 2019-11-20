import React, { useState, useContext } from 'react';
import { todoContext } from './TodoStore';


const TodoSetter: React.FC = () => {
    const todoStore = useContext(todoContext)
    const [title, setTitle] = useState('Title');
    const [finished, setFinished] = useState(false);
    
    const handleTitleInput = (e: any) => {
        setTitle(e.target.value);
    }
    const handleFinishedInput = (e: any) => {
        setFinished(!finished);
    }
    const handleSubmit = () => {
        todoStore.addTodo(title, finished);
        setTitle('');
    }
    return <div>
        <input onChange={ handleTitleInput } type="text" name="title"/>
        <input onChange={ handleFinishedInput } type="checkbox" name="finished"/>
        <button onClick={ handleSubmit }>Save</button>
    </div>;
}

export default TodoSetter;