const express = require('express');
const app= express();

const Port= 5000;

app.get('/', (req,res)=>{
    res.send('Jai Shree Ram');
})

app.listen(Port, ()=>{
    console.log(`server is running on http://localhost:${Port}`);
    
})