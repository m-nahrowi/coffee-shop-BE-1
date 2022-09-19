const Payment = require('../model/payment')

module.exports = {
    addPayment : async (req,res) =>{
        try{
            const results = await Payment.addPayment(req,res)
            return res.status(200).send(results)
        }catch(err){
            return res.status(500).send(err)
        }
    }
}