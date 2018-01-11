var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

router.get('/hello', (req, res, next) => {
  res.render('hello')
})

module.exports = router
