const Router = require('express'),
	router = new Router(),
	UserController = require('../controllers/UserController')


router.post('/registration', UserController.register)
router.post('/loginlocalstorage', UserController.loginLocal)
router.post('/login', UserController.login)
router.get('/activate:id', UserController.activate)
router.post('/setPlaylist', UserController.setPlaylist)
module.exports = router