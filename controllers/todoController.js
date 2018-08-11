const bodyParser = require('body-parser')
const data = require('./data')
let urlencodedParser = bodyParser.urlencoded({
 extended: false
})

module.exports = function (app) {

 // render data in view
 app.get('/todo', function (req, res) {
  res.render('todo', { todos: data })
 })

 // fires when ajax request is made (todo-list.js/ln:6)
 app.post('/todo', urlencodedParser, function (req, res) {
  // add middleware to handle ajax request
  data.push(req.body)
  res.json(data)
 })

 app.delete('/todo/:item', function (req, res) {

 })

}