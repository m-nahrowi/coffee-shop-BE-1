const db = require("../helper/db_connections")

module.exports = {
    addPayment : (req,res) =>{ 
        return new Promise((resolve,reject) =>{
            const {product_id, product_count, payment_method ,subtotal} = req.body
            console.log(req.body)
            const sql = `INSERT INTO payment (product_id, product_count, payment_method ,subtotal) VALUES (${product_id}, ${product_count}, '${payment_method}',${subtotal})`
            db.query(sql, (err,results) =>{
                if(err){
                    reject({
                        message: err
                    })
                }
                resolve({
                    message: "add Payment success",
                    status: 200,
                    data: results

                })
            })
        })
    }
}