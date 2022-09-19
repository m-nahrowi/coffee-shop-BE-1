const db = require("../helper/db_connections")
module.exports = {
    getAllCategory : (req,res) =>{
        return new Promise((resolve,reject) =>{
            db.query(`SELECT * FROM category`, (err,results) =>{
                if(err){
                    reject({
                        message: err
                    })
                }
                resolve({
                    message: "get all category success",
                    status: 200,
                    data: results

                })
            })
        })
    }
}