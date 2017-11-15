import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
// import path from 'path';

import config from './config/config';
// import routes from './router/routes';


const app = express();
app.listen(config.serverPort, () => {
    console.log(`Congrats ! Started on port ${config.serverPort} !`);
});