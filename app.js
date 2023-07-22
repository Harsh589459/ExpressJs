const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))//read the req.body

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <div><input type="number" name="product-size"></div><button type="submit">Add Product</button></form>')
})

app.use("/product",(req,res,next)=>{
    console.log(req.body);//if there is no body parser then it will show undefined
    console.log("first")
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log("in the another middleware")
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000);

//body-parser