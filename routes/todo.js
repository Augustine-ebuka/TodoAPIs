const express = require('express');
const router = express.Router();

const { getAlltodo, getTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todo')

router.route('/').get(getAlltodo);
router.route('/').post(createTodo);
router.route('/:id').get(getTodo);
router.route('/:id').patch(updateTodo);
router.route('/:id').delete(deleteTodo);

module.exports = router;