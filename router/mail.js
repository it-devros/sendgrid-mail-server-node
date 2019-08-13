const express = require('express')
const router = express.Router()

let mailController = require('../controllers/mailController')

const runAction =  (action, req, res) => {
  action(req, res)
    .then((data) => {
      res.status(200).send(data)
      return
    })
    .catch((err) => {
      res.status(err.status || 400).send({ message: err.message})
      return
    })
}

router.get('/', (req, res) => {
  res.json({status: '/mail server is running.'})
})

router.post('/', (req, res) => runAction(mailController.sendMail, req, res))

module.exports = router