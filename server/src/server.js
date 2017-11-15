import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
// import path from 'path';

import config from './config/config';
import router from './router/routes';

//INITIALIZE DATABASE
mongoose.connect(config.mongoUrl, () => {
    console.log('Congrats ! DataBase initialized !')
});

const app = express();

//CALL ROUTES
app.use(router);

app.listen(config.serverPort, () => {
    console.log(`Congrats ! Started on port ${config.serverPort} !`);
});