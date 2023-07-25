const path=require('path');
const express= require('express')
const rootDir= require('../util/path')
const router = express.Router();
const appController=require('../controllers/products')

router.post('/success',appController.success)
module.exports=router;