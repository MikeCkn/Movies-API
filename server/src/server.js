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

app.get('/', function(req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function(req, res) {
    res.send('Hello !');
});

// app.use(router);

app.listen(config.serverPort, () => {
    console.log(`Congrats ! Started on port ${config.serverPort} !`);
});