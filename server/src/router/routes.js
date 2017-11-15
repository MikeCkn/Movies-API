import express from 'express';
// import multer from 'multer';
// import path from 'path';

//IMPORT MOVIE SCHEMA FROM DB
import Movie from '../models/movie';

const router = express.Router();

router.get('/', (req, res) => {
    Movie.find((err, movies) => {
        if (err) {
            res.send(err)
        }
        res.json(movies)
    });
});

module.exports = router;