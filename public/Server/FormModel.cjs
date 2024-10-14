const mongoose = require('mongoose');

const Mongourl = "mongodb+srv://Jyotishkumar:Jyotish123@dev-clustor.1mynx.mongodb.net/stagevibes";

mongoose.connect(Mongourl).then(()=>{

        console.log(`connected on ${mongoose.connection.host}`)
    }).catch(err=>{
        console.log("error in connection",err)
    })


const FormSchema = new mongoose.Schema(
    {
        name:String,
        clas:String,
        roll:Number,
        email:String,
        mobile:Number,
        event:String
    }
)

module.exports = mongoose.model('form',FormSchema)