import mongoose from 'mongoose';

const Login = mongoose.Schema({
    name: {type: String, required: true},
    password:{type: String, required: true},
})

export default mongoose.model('Login', Login)