import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import path from 'path';
import session from 'express-session';
import bodyParser from 'body-parser';

import { fileURLToPath } from 'url';

const PORT = 3000;
const DB_URL= "mongodb+srv://Artem:Artem123@cluster0.dt9d130.mongodb.net/?retryWrites=true&w=majority"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

async function StartApp(){
    try{
        await mongoose.connect(DB_URL) // асинхронна, може бути підкл не одразу
        app.listen(PORT, function() {console.log(`Server started on ${PORT}`)});
    }
    catch (e){
        console.log(e);
    }
}
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));
app.use(express.json());
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/', router)
app.set("view engine", "ejs");
app.get('/', function(req, res){
    res.render('cites')
})   
//app.get('/clients', function(req, res){res.render('clients')})


StartApp();
