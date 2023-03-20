const express = require('express')
const router = express.Router()
const amdin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')

router.get('/restaurants', restController.getRestaurants)
router.use('/admin', amdin)
module.exports = router
