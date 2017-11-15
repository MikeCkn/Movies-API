import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
// import path from 'path';

import config from './config/config';
// import routes from './router/routes';

//INITIALIZE DATABASE
mongoose.connect(config.mongoUrl, () => {
    console.log('Congrats ! DataBase initialized !')
});

const app = express();

app.get('/', function(req, res) {
    res.send('Home !')
});

app.get('/exampleA', function(req, res) {
    res.send('Hello from A !')
})

app.get('/exampleB', function(req, res, next) {
    console.log('Test with next !')
    next()
}, function(req, res) {

    res.send('Hello from B !')
});

// app.use(router);

app.listen(config.serverPort, () => {
    console.log(`Congrats ! Started on port ${config.serverPort} !`);
});