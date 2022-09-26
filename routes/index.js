const express = require('express')
const app = express()
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const paymentRouter = require('./paymentRouter')
const authRouter = require('./authRoute')
const userRouter = require('./userRouter')
app.use('/product', productRouter)
app.use('/category', categoryRouter)
app.use('/payment', paymentRouter)
app.use('/auth', authRouter)
app.use('/users',userRouter
)
module.exports = app