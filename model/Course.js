import mongoose from 'mongoose';

const Course = mongoose.Schema({
    name: {type: String, required: true},
    master:{type: String, required: true},
    phone: {type: String, required: true},
    deadline: {type: Date, required: true},
   
})

export default mongoose.model('Course', Course)