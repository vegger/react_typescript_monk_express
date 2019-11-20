import React, { createContext } from 'react';
import { Todo } from './Todo';
import { observable, computed } from 'mobx';
const axios = require('axios').default;

interface TodoSchema {
    _id: string;
    finished: boolean;
    title: string;
}

type GetTodosResponse = TodoSchema[];

class TodoStore {
    @observable _todos: Todo[] = [];

    constructor(){
        this.updateTodoList();
    }

    private updateTodoList = async() => {
        try {
            const res = await axios.get('http://localhost:5098/api/getTodos');
            if(JSON.stringify(res.data) !== JSON.stringify(this._todos)){
                var newList = [];
                for( let i of res.data ){
                    var todo = new Todo(i._id, i.title, i.finished);
                    newList.push(todo);
                }
                this._todos = newList;
            }
        }
        catch(error){
            console.log("Error: " + error);
        }
    }

    public addTodo = async(_title: string, _finished: boolean) => {
        try{
            await axios.post('http://localhost:5098/api/addTodo', {
                title: _title,
                finished: _finished
            });
            this.updateTodoList();
        }
        catch(error){
            console.log("AddTodo " + error.message);
        }
    }

    public get todos(){
        return this._todos;
    }
}

export const todoContext = createContext(new TodoStore());