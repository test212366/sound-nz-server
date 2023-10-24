const UserModel = require('../models/UserModel')
const UserService = require('../services/userService')

class UserController {
	async register(req, res, next) {
		try {
	 
			const {email, name, password} = req.body,
				user = await UserService.registration(email,password, name)
			return res.json(user)
		} catch(e) {
			console.log(e)
		} 
	}
	async loginLocal(req, res,next) {
		try {
	 
			const {token} = req.body,
				user = await UserService.loginLocal(token)
			return res.json(user)

		} catch(e) {
			console.log(e)
		}
	}
	async activate(req, res, next) {
		try {
			const id = req.params.id
			await UserService.activate(id.replace(':', ''))
			return res.redirect(process.env.API_URL)
		} catch(e) {
			console.log(e)
		}
	}
	async login(req, res, next) {
		try {	
			const {email, password} = req.body,
				user = await UserService.login(email, password)
			return res.json(user)
		} catch(e) {
			console.log(e)
		}
	}
	async setPlaylist(req, res, next) {
		try {
			console.log(req.body)
			const {playlists, name} = req.body
			await UserService.setPlaylist(playlists, name)
			return res.status(500)
		} catch(e) {
			console.log(e)
		}
	}
}
module.exports = new UserController()