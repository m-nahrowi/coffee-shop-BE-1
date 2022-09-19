const db = require("../helper/db_connections")
const fs = require('fs')


module.exports = {
    getAllProduct: (req,res) =>{
        return new Promise((resolve, reject) =>{
            // const sql = 'select * from product '
            const id_category= req.query.id_category
            console.log(id_category)
            const sql  = `SELECT product.product_id, product.product_name, product.product_image, product.product_price, product.product_desc, category.category_name  from product JOIN category ON product.id_category = category.category_id ${id_category ? `WHERE product.id_category LIKE'${id_category}'`:''}  `
            db.query(sql, (err,results) =>{
                if(err) {
                    reject({
                        message: err
                    })
                }
                resolve({
                    message: "get all product success",
                    status: 200,
                    data: results
                })
            })
        })
    },
    postProduct: (req,res) =>{
        return new Promise((resolve, reject) =>{
            const {product_name, product_image,product_price, product_desc, id_category} = req.body
            const sql = `INSERT INTO product (product_name, product_image, product_price ,product_desc, id_category) VALUES ('${product_name}', '${product_image}', ${product_price},'${product_desc}', '${id_category}' )`
            db.query(sql, (err,results) =>{
                if(err) {
                    reject({
                        message: err
                    })
                }
                resolve({
                    message: "add product success",
                    status: 200,
                    data: results
                })
            })
        })
    },
    updateProduct :(req,res) =>{
        return new Promise((resolve, reject) =>{
            const {id} =req.params
            db.query(`SELECT * FROM product WHERE product_id = ${id}`,(err,result) =>{
                if(err){
                    reject({
                        message: 'maaf product tidak tersedia'
                    })
                }
                if(req.file){
                    fs.unlink(`./upload/${result[0].product_image}`, function(err){
                        if(err){
                            console.log(err)
                        }
                    })                   
                }
                const previousData ={
                    ...result[0],
                    ...req.body
                }
                const  {product_name, product_image, product_price, product_desc, product_category} =previousData
                const sql = `UPDATE product SET product_name='${product_name}',product_image='${product_image}', product_price='${product_price}',  product_desc='${product_desc}', product_category='${product_category}' WHERE product_id = ${id} `

                db.query(sql,(err,results) =>{
                    if(err){
                        reject({
                            message: "update product failed"
                        })
                    }
                    resolve({
                        message: "update product success",
                        status: 200,
                        data: results
                    })
                })
            })
        })
    },
    removeProduct : (req,res) =>{
        return new Promise((resolve, reject) =>{
            const {id} = req.params
            db.query(`SELECT product_image FROM product WHERE product_id = ${id}`,(err,result ) =>{
                if(err){
                    reject({
                        message: err
                    })
                }
                if(!result.length){
                    reject({
                        message: 'product tidak ditemukan'
                    })
                }else{
                    let image = result[0].profile_image
                    db.query(`DELETE FROM product WHERE product_id =${id}`,(err,results) =>{
                        if(err){
                            reject({
                                message: err
                            })
                            fs.unlink(`./upload/${image}`, function(err){
                                resolve({
                                    message: 'delete product success',
                                    status: 200,
                                    data: results
                                })
                            })
                            resolve({
                                message: 'delete product success',
                                status: 200,
                                data: results
                            })
                        }
                    })
                }

            })
        })
    },  getProductById: (req,res) =>{
        return new Promise((resolve, reject) =>{
            const {id} =req.params
            const sql = `SELECT product.product_id, product.product_name, product.product_image, product.product_price, product.product_desc, category.category_name  from product JOIN category ON product.id_category = category.category_id WHERE product.product_id= ${id} `
            db.query(sql, (err,results) =>{
                if(err) {
                    reject({
                        message: err
                    })
                }
                resolve({
                    message: "get product success by id",
                    status: 200,
                    data: results
                })
            })
        })
    },
    getSize: (req,res) =>{
        return new Promise((resolve, reject) =>{
            const {id} =req.params
            const sql = `SELECT size.code, size.ket FROM product_size JOIN size ON product_size.id_size = size.id_size WHERE product_size.product_size_id =${id};`
            db.query(sql, (err,results) =>{
                if(err) {
                    reject({
                        message: err
                    })
                }
                resolve({
                    results
                })
            })
        })
    },

}
