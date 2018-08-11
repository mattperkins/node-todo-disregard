const express = require('express')
const todoController = require('./controllers/todoController')

const app = express()

// config template engine
app.set('view engine', 'ejs')

// static files using middleware
app.use(express.static('./public'))

// fire controllers
todoController(app)

// listen on PORT
const PORT = 3000
app.listen(PORT)
console.log(`App listening on PORT ${PORT}`)
