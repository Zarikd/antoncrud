require('./mongoDB').dataBaseConnect()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use('/api/antonCrud', require('./api/antonCrud/router'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})