const express = require('express')
const path = require('path');
const rootDir=require('../util/path')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"> <div><input type="number" name="product-size"></div><button type="submit">Add Product</button></form>')
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))


})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);//if there is no body parser then it will show undefined
    res.redirect('/shop');
});

module.exports=router;