const express = require('express')
const passport = require('../../config/passport')
const router = express.Router()
const amdin = require('./modules/admin')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')
router.use('/admin', authenticated, authenticatedAdmin, amdin)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.get('/restaurants', authenticated, restController.getRestaurants)
router.use('/', apiErrorHandler)
module.exports = router
