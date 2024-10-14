const express = require('express')
const cors = require('cors');
const formModel= require('./FormModel.cjs')

const app = express();

app.use(cors());
app.use(express.json())

app.get('',async(req,res)=>{
    const data = await formModel.find()
    res.json(data);
})

app.post('/',async(req,res)=>{
    let dataSave = new formModel(req.body);
    let result =await dataSave.save();
    console.log(result);
})

app.delete('/:id',async(req,res)=>{
    let {id} = req.params;
    let data = await formModel.deleteOne({_id:id})
    res.send(data);
})

app.listen(3000);