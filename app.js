const express = require('express')

const app = express()

// config template engine
app.set('view engine', 'ejs')

// static files using middleware
app.use(express.static('./public'))

// listen on PORT
const PORT = 3000
app.listen(PORT)
console.log(`App listening on PORT ${PORT}`)
