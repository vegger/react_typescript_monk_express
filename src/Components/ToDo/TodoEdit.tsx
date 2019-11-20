import React, { useState } from 'react';
import { Todo } from './Todo';

interface propTypes {
    todo: Todo,
    unmount: Function
}

export const TodoEdit: React.FC<propTypes> = ({todo, unmount}) => {
    const [title, setTitle] = useState(todo.title);
    const [finished, setFinished] = useState(todo.finished);

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    }

    const handleSubmit = () => {
        todo.title = title;
        todo.finished = finished;
        unmount();
    }
    

    return(
        <div id="todoEdit">
            <input type="text" onChange={handleTitleChange} defaultValue={title}/>
            <input type="checkbox" checked={ todo.finished } />
            <button onClick={handleSubmit}>Save</button>
        </div>
    )
}