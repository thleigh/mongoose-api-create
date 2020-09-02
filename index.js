const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/modernWarfareGuns', require('./controllers/modernWarfareGuns'))

app.listen(3000, () => {
    console.log('Listening to port 3000')
})