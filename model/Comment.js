import mongoose from 'mongoose';

const Comment = mongoose.Schema({
    name: {type: String, required: true},
    service:{type: String, required: true},
    master:{type: String, required: true},
    review: {type: String, required: true},
    rating: {type: Number, required: true}   
})

export default mongoose.model('Comment', Comment)