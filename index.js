const express=require('express');

const app=express();
var port=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send ("Welcome latha..!!")
})
app.listen(port,()=>{
    console.log("server running")
})