const path  = require('path');
const rootDir=require('../util/path');

exports.contacts=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.success=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}