import mongoose from 'mongoose';

const newMovie = new mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    year: {
        type: 'String',
        required: true
    },
    actors: {
        type: 'String',
        required: true
    },
    image: {
        type: 'String'
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Movie', newMovie);