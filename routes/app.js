const express = require('express');
const app = express();


const adminRoutes=require('./admin')
const shopRoutes = require('./shop');

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))//read the req.body


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})



app.listen(3000);

//body-parser