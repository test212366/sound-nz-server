const Router = require('express'),
	router = new Router(),
	trackController = require('../controllers/TrackController')


router.get('/getTrackMain', trackController.getMain)
router.post('/setTracksMain', trackController.setMain)
router.post('/getGenre', trackController.getTracksGenre)
router.post('/getTracksArtist', trackController.getTracksArtists)
router.post('/getTracksAlbums', trackController.getTracksAlbum)

module.exports = router