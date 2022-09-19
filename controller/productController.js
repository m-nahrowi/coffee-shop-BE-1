const Product = require('../model/product')

module.exports = {
    getAllProduct: async (req,res) =>{
        try{
            const results = await Product.getAllProduct(req,res)
            
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    postProduct: async (req,res) =>{
        try{
            // console.log(req.body)
            console.log(req.file)
            if(req.file){
               reqModifier ={
                ...req,
                    body:{...req.body, product_image : req.file.filename}
               }
            }
            const results = await Product.postProduct(reqModifier,res)
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    updateProduct: async (req,res) =>{
        try{
            // console.log(req.body)
            console.log(req.file)
            if(req.file){
               reqModifier ={
                ...req,
                    body:{...req.body, product_image : req.file.filename}
               }
            }
            const results = await Product.updateProduct(reqModifier,res)
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    removeProduct: async (req,res) =>{
        try{
            const results = await Product.removeProduct(req,res)
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    getProductById: async (req,res) =>{
        try{
            const results = await Product.getProductById(req,res)
            const size = await Product.getSize(req,res)
           data = {
            ...results,
            size
           }
            return res.status(200).send(data)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    getProductByCategory: async (req,res) =>{
        try{
            const results = await Product.getProductByCategory(req,res)
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    },
    
}
