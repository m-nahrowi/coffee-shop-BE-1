const db = require('../helper/db_connections')

module.exports={
    getUserByid: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT account_id, email, phone_number, delivery_address, display_name, tanggal_lahir,firstname,lastname,gender,profile_image FROM account WHERE account_id= ?`, userId, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    },
    update: (userId, setData) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE account SET  ? WHERE account_id = ? `, [setData, userId], (err, results) => {
                if (err) reject(err)
                resolve({
                    userId,
                    results
                })
            })
        })
    },
}