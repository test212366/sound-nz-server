const Router = require('express'),
	router = new Router(),
	userRouter = require('./userRouter'),
	trackRouter = require('./trackRouter')

router.use('/user', userRouter)
router.use('/track', trackRouter)

module.exports = router