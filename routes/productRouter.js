const express = require("express")
const productController = require("../controller/productController")
const router = express.Router()
const upload = require('../helper/multer')

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProductById)
router.post('/', upload.single('product_image'),productController.postProduct)
router.patch('/', upload.single('product_image'),productController.updateProduct)
router.delete('/', productController.removeProduct)
module.exports = router