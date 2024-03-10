const Todo = require("../models/todo");
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors');

//get all todos for a particular user
const getAlltodo = async (req, res) => {
    //todo assoicited with a particular user
    const todos = await Todo.find({ createdBy: req.user.userId }).sort('createdAt');
    res.status(StatusCodes.CREATED).json({todos,len: todos.length});
}
//get one todo for one user
const getTodo = async (req, res) => {
    const { user: { userId }, params: { id: todoId } } = req;
    const singleTodo = await Todo.findOne({
        _id: todoId,
        createdBy: userId,
    
    })
    if (!singleTodo) {
        throw new NotFoundError('Todo not found');
    }
    res.status(StatusCodes.OK).json({singleTodo})
}
//create a Todo for a particular user
const createTodo = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const todo = await Todo.create(req.body)
    res.status(201).json({ todo })
}
//update todo for a particular user
const updateTodo = async (req, res) => { 
    const {
        body:{todo,completed},
        user: { userId },
        params: { id: todoId } } = req;
    
    if (todo === '') { 
        throw new BadRequestError("todo can not be empty");
    }
    const patchTodo = await Todo.findByIdAndUpdate(
        {
        _id: todoId,
        createdBy: userId
        },
        req.body,
        { new: true, runValidators: true });
    if (!patchTodo) { 
        throw new NotFoundError(`No todo with id ${todoId}`);
    }
    res.status(StatusCodes.OK).json({patchTodo});
}
//delete TODO for a particular user
const deleteTodo = async (req, res) => {
    const { user: { userId }, params: { id: todoId } } = req;
    const deleteTodo = await Todo.findByIdAndDelete({ _id: todoId,createdBy: userId });
    if (!deleteTodo) { 2
        throw new NotFoundError(`No todo with id ${todoId}`);
    }
    res.status(StatusCodes.OK).json({Msg: 'Todo deleted successfully'});
}

module.exports = { getAlltodo, getTodo, createTodo, updateTodo, deleteTodo };
