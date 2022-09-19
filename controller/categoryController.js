const Category = require("../model/category")
module.exports ={
    getAllCategory : async (req,res) =>{
        try {
            const results = await Category.getAllCategory(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}