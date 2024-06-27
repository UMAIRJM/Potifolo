const express  = require('express');
const path = require('path');
const app = express();
const moongoose = require('mongoose');
require('dotenv').config();
const messagesModel = require('./Model/MessageSchema');
const { log } = require('console');
const cors = require('cors');
app.use(express.json());
app.use(cors());

moongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connected to DB');
}).catch((err)=>{
    console.log('error connecting to DB' + err);
})


const port =  9000;
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/', async (req,res)=>{
    let newMessages = new messagesModel();
    
    let data = req.body;
    if(data !== null){

        
        newMessages.firstName = data.firstName;
        newMessages.lastName = data.lastName;
        newMessages.email = data.email;
        newMessages.phone = data.number;
        newMessages.message = data.message;
        await newMessages.save();
    }
    else{
        console.log('nothing to save');
    }
console.log(data);

})
app.listen(port,()=>{
    console.log('App is running');
})