const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c668db8d18c29376cba5415';

// if (!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

var id = '5c6577d8a1e01d604dcebc4b';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User by id', user);
}).catch((e) => console.log(e));
