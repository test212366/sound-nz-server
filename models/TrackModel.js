const { Schema, model } = require("mongoose")

const TrackSchema = new Schema({
	imgSRC: {type: String, require: true},
	name: {type: String, require: true},
	groupName: {type: String, require: true},
	timeTrack: {type: String, require: true},
	isLike: {type: Boolean, default: false},
	trackSRC: {type: String, require: true},
	type: {type: String, require: true},
	genre: {type: String, require: true},
	album: {type: String, require: true}
})
module.exports = model('Tracks', TrackSchema)