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
        this.fetchdata();
    }

    private fetchdata = async() => {
        try{
          let res = await fetch('http://localhost:5098/api/getTodos');
          let fetchData: GetTodosResponse = await res.json();
          for(let i of fetchData){
            var todo = new Todo(i.title, i.finished);
            this._todos.push(todo);
          }
        }
        catch(error){
          console.log("Error: " + error);
        }
    }  

    public addTodo = async(_title: string, _finished: boolean) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({title: _title, finished: _finished}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            await fetch('http://localhost:5098/api/addTodo', options);
            var todo = new Todo(_title, _finished);
            this._todos.push(todo);
        }
        catch(error){
            console.log("Error while adding a todo: " + error);
        }
/*         try {
            await fetch('http://localhost:5098/api/addTodo/' + _title + "/" + _finished);
            var todo = new Todo(_title, _finished);
            this._todos.push(todo);
        } catch (error) {
            console.log(error);
            alert("Hat nicht funktioniert");
        } */
    }

    @computed
    public get todos(){
        return this._todos;
    }
}

export const todoContext = createContext(new TodoStore());