const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
    console.log("this will alaway runs")
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log("in the another middleware")
    res.send('<h1>The "Add Product"!</h1>')
})
app.use('/', (req, res, next) => {
    console.log("in the another middleware")
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(8000);


