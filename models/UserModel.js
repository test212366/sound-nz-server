const { Schema, model } = require("mongoose"),

UserSchema = new Schema({
	email: {type: String, require: true, unique: true},
	password: {type: String, require: true},
	name: {type: String, require: true},
	activationLink: {type: String, unique: true},
	isActivated: {type: Boolean, default: false},
	playlists: {type: Array, default: [{name: 'generated', playlists: [
		{
			imgSRC: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/ecbdeb2afeab1e29698b6bcf90c05a5f',
			name: 'Natural',
			groupName: 'Imagine Dragons',
			timeTrack: '3:11',
			isLike: false,
			trackSRC: 'https://res.cloudinary.com/diny9etcf/video/upload/v1661611556/Imagine_Dragons_-_Natural_megasongs.me_a7ytnn.mp3'
		},
		{
			imgSRC: 'https://www.classicalmusicnews.ru/wp-content/uploads/2014/03/klassicheskaya-muzyika.jpg',
			name: 'Fantazy',
			groupName: 'Chopin',
			timeTrack: "5:38",
			isLike: false,
			trackSRC: 'https://res.cloudinary.com/diny9etcf/video/upload/v1661772299/%D0%A4%D1%80%D0%B8%D0%B4%D0%B5%D1%80%D0%B8%D0%BA_%D0%A8%D0%BE%D0%BF%D0%B5%D0%BD_-_%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D0%B7%D0%B8%D1%8F-%D1%8D%D0%BA%D1%81%D0%BF%D1%80%D0%BE%D0%BC%D1%82_%D0%B4%D0%BE-%D0%B4%D0%B8%D0%B5%D0%B7-%D0%BC%D0%B8%D0%BD%D0%BE%D1%80_%D0%B0%D1%80%D1%84%D0%B0_megasongs.me_od61dk.mp3'
		}
	]}]}
})
module.exports = model('User', UserSchema)