const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'Please provide content name'],
        maxLength: 50
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Please provide user'],
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
