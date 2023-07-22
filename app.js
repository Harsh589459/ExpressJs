const http = require('http');
const express = require('express');//it exports the function here

const app = express();


//next is a function that is passed si receiving another function has to be executed to travel along next middle ware
app.use((req,res,next)=>{//use allows us to add middleware function
console.log("in the middleware")
next();//to allow the next middleware to run
})
app.use((req,res,next)=>{//use allows us to add middleware function
    console.log("in the another middleware")
    res.send('<h1>Hello from Express!</h1>')
    })


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);


