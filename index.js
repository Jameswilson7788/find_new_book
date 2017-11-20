const fs = require('fs')

const opendata = fs.readFileSync('./data/opendata.json','utf8').toString('utf8')

const express = require('express')
const app = express()

app.get('/', function (req,res,next) {
    res.send(opendata)
})

app.listen(3000)