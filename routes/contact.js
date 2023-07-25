const express=require('express');
const router =express.Router();
const path  = require('path');
const rootDir=require('../util/path');
const appController=require('../controllers/products')

router.get('/contact',appController.contacts);


module.exports=router;