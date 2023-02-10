import mongoose from 'mongoose';

const Client = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    course:{type: String, required: true},
    master:{type: String, required: true}
})


export default mongoose.model('Client', Client)