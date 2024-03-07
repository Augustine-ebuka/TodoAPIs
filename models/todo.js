const mongoose = require('mongoose');

todoSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: [true, 'please provide title name'],
        maxLength: 50
    },
    content: {
        type: 'String',
        required: [true, 'please provide content name'],
        maxLength: 50
    },
    status: {
        type: 'String',
        enum:['inProgress', 'completed', 'notCompleted'],
       default: 'notCompleted',
  
    },
    createdBy: {
        type: mongoose.Types.ObjectId,//this allow us to tie anyjob created to our User model
        ref: 'User',// model we are referncing which is our User model.
        required: [true, 'Please provide user'],
    },
},
    { timestamps: true }
)


module.exports = mongoose.model('Todo', todoSchema);