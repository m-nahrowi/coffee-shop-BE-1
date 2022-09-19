const db = require("../helper/db_connections")
module.exports = {
    register: (setData) =>{
        return new Promise((resolve, reject) =>{
            db.query(`INSERT INTO account SET ?`, setData, (err,results) =>{
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    },
    login: (email) =>{
        return new Promise((resolve, reject) =>{
            db.query(`SELECT account_id, password, account_role  FROM account WHERE email = '${email.toLowerCase()}' `, (err,results) =>{
                if(err){
                    reject(err)
                }
                resolve(results)
                
            })

        })
    },
    checkEmail : (email) =>{
        return new Promise((resolve, reject) =>{
            db.query(`SELECT account_id,  account_role  FROM account WHERE email = '${email.toLowerCase()}' `, (err,results) =>{
                if(err){
                    reject(err)
                }
                resolve(results)
                
            })

        })

    }
}