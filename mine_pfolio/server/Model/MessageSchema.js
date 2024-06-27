const moongoose = require('mongoose')

const messagesSchema = moongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    message:String,
})


const messagesModel = moongoose.model('messages',messagesSchema);
module.exports = messagesModel