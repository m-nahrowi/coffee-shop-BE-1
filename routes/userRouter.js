const express = require('express')
const router = express.Router()
const usersController = require('../controller/userController')
const upload = require('../helper/multer')
const {isLogin} = require('../helper/auth')

router.get('/', isLogin, usersController.getUserId)
router.patch('/', isLogin, upload.single('profile_image'), usersController.update)



module.exports =router
