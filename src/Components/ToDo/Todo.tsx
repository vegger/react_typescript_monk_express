import { observable, computed } from 'mobx'; 


export class Todo {
    @observable private _title: string;
    @observable private _finished: boolean;
    private _key: string;
    constructor(key: string, title: string, finished: boolean ){
        this._key = key;
        this._title = title;
        this._finished = finished;
    }

    public set title(title: string){
        this._title = title;
    }

    public set finished(finished: boolean){
        this._finished = finished;
    }

    @computed public get key(){
        return this._key;
    }

    @computed public get title(){
        return this._title;
    }

    @computed public get finished(){
        return this._finished;
    }
}

