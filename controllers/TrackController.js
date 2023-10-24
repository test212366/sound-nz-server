const trackService = require("../services/trackService")

class TrackController {
	async getMain(req, res, next) {
		try {
			const tracks = await trackService.getMain()
			return res.json(tracks)
		} catch(e) {
			console.log(e)
		}
	}
	async getTracksGenre(req, res, next) {
		try {
			const {filter} = req.body,
				tracks = await trackService.getGenre(filter)
			return res.json(tracks)
		} catch(e) {
			console.log(e)
		}
	}

	async setMain(req, res, next) {
		try {
			const {filter} = req.body
			await trackService.setMain(filter)
			return res.json('complete')
		} catch(e) {
			console.log(e)
		}
	}
	async getTracksArtists(req, res, next) {
		try {
			const {filter} = req.body,
				tracks = await trackService.getTracksArtists(filter)
			return res.json(tracks)
		} catch(e) {
			console.log(e)
		}
	}
	async getTracksAlbum(req, res, next) {
		try {
			const {filter} = req.body,
				tracks = await trackService.getTracksAlbum(filter)
			return res.json(tracks)
		} catch(e) {
			console.log(e)
		}
	}
}
module.exports = new TrackController()