const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
} , {timeStamps: true});

const Hashtag = momgoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;