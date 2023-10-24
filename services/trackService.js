const TrackModel = require('../models/TrackModel')

class TrackService {
	async getMain() {
		const tracks = await TrackModel.find({type: 'main'})
		 
		return tracks
	}
	async setMain(tracks) {
		tracks.forEach(async track  => {
			await TrackModel.create({
				album: track.album,
				genre: track.genre,
				groupName: track.groupName,
				imgSRC: track.imgSRC,
				isLike: track.isLike,
				name: track.name,
				timeTrack: track.timeTrack,
				trackSRC: track.trackSRC,
				type: track.type
			})
		})
	}
	async getGenre(genre) {
		const tracks = await TrackModel.find({genre})
		return tracks
	}
	async getTracksArtists(artist) {
		const tracks = await TrackModel.find({groupName: artist})
		return tracks
	}
	async getTracksAlbum(album) {
		const tracks = await TrackModel.find({album})
		return tracks
	}
}
module.exports = new TrackService()