import { Request, Response, NextFunction } from "express";
import { transcode } from "buffer";
import { async } from "q";
const Request = require('express');
// @ts-check
const express = require('express');
const helmet = require('helmet');
const app = express();
const url = 'localhost:27017/myproject'; // Connection URL
const db = require('monk')(url);
const cors = require('cors');
const bodyparser = require('body-parser');


const collection = db.get('todos')

app.use(cors());
app.use(helmet());
app.use(bodyparser());

/* app.use((req, res, next) => {
    req.myDate = "Date.now()";
    // req.db = monk('localhost:...')
    next();
}); */
 

app.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send('hello world');
  })

app.get('/api/getTodos', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await collection.find({});
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

app.post('/api/addTodo', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await collection.insert([{title: req.body.title, finished: req.body.finished}]);
        const data = await collection.find({});
        console.log(JSON.stringify(data));
        res.status(200).json(data);
    }
    catch {
        next();
    }
});
/* 

app.get('/api/v1/user/:id', (req, res, next) => {
    res.status(200).json({
        name: 'Max',
        id: req.params.id,
        requested: req.myDate
    });
});

app.get('/api/v1/users/:id', (req, res, next) => {
    res.status(200).json({
        name: 'Max',
        id: req.params.id,
        requested: req.myDate
    });
});
app.get('/api/v1/users/:id', async (req, res, next) => {
    try {
        const user = await req.db.get('users').findOne({
            id: req.params.id
        });
        const todos = await req.db.get('todos').find({ 
            userId: user.id
        });
        
        res.json({
            user,
            todos
        });
    } catch (err) {

    }
});
 */
app.use((err: any, req: Request, res: Response) => {
    if(req.xhr) {
        res.status(500).json({
            message: err.message,
            error: err.code || 500
        })
    }
})


app.listen(5098, () => {
    console.log('Server listening on localhost:5098');
});