const path=require('path');
const express= require('express')
const rootDir= require('../util/path')

const router = express.Router();

router.get('/shop', (req, res, next) => {
    // res.send('<h1>Hello from Express! Welcom to shop</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'));//path.join detects the os and give the path correctly from the route folder
    //../---up one level 'views'--views foler then shop.html
})

module.exports=router;