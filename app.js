var express = require('express')
var app = express()
var path = require('path')

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use('/public/', express.static(path.join(__dirname, './public/')))

app.get('', function (req, res) {
    res.send('hellow')
})

app.listen(3000, function () {
    console.log('runing blog...')
})