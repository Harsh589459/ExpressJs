const express = require('express');
const app = express();
const path = require('path');

const adminRoutes=require('./routes/admin')
const shopRoutes = require('./routes/shop');
const contact = require('./routes/contact')
const success= require('./routes/success')

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))//read the req.body

app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);
app.use('/',contact);
app.use('/',success)
app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(4000);

//body-parser