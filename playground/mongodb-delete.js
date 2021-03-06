//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').deleteMany({name: 'Slobodan'}).then((result) =>{
        console.log(result);
    });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}). then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c654bca85f67d43e32ae903')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});