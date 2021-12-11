const express = require('express');
const app = express();

app.get('/sayHelloWorld', function(req, res) {
    console.log('sayHelloWorld called')
    res.send('Hello World');
})

app.get('/sayGoodMorning', function(req, res) {
    console.log('sayGoodMorning called')
    res.send('Good Morning');
})

app.get('/', function(req, res) {
    const endpoits = {
        0: '/sayHelloWorld',
        1: '/sayGoodMorning'
    }

    res.send(endpoits);
})


app.listen(3002, () => {
    console.log('App is running on port 3002');
});