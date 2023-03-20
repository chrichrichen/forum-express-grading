const express = require('express')
const router = express.Router()
const amdin = require('./modules/admin')
const { apiErrorHandler } = require('../../middleware/error-handler')
const restController = require('../../controllers/apis/restaurant-controller')
router.use('/admin', amdin)
router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler)
module.exports = router
