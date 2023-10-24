const UserModel = require('../models/UserModel'),
	bcrypt = require('bcrypt'),
	uuid = require('uuid'),
	jwt = require('jsonwebtoken')
const mailService = require('./mailService')


	const generateJwt = (id, email) => {
		return jwt.sign({ id, email }, 'fdsjlk lsfdlkj lsdk',
			 { expiresIn: '48h' })
  }
  

class UserService {
	async registration(email, password, name) {

		const candidate = await UserModel.findOne({email})
		if(candidate) return {error: 'email used'}
		const candidateName = await UserModel.findOne({name})
		if(candidateName) return {error: 'name used'}
		const hashPassword = await bcrypt.hash(password, 3),
			activationLink = uuid.v4(),
			user = await UserModel.create({
				password: hashPassword,
				name,
				email,
				activationLink: activationLink
			})
			const token = generateJwt(user._id, email)
			await mailService.sendActivationEmail(email, `https://soundnznode.herokuapp.com/api/user/activate:${activationLink}`)
		
			return {
				token, 
				user
			}

	}
	async loginLocal(token) {
		const {id} = await jwt.decode(token),
			user = await UserModel.findById({_id: id})
		return user
	}
	async activate(id) {
		await UserModel.findOneAndUpdate({activationLink: id}, {isActivated: true})
	}
	async login(email, password) {
		const candidate = await UserModel.findOne({email})
		if(!candidate) return {error: 'user not find'}
		const equalPassword = await bcrypt.compareSync(password , candidate.password)
 		if(!equalPassword) return {error: 'password not equal'}
		 const token = generateJwt(candidate._id, email)
		 if(!candidate.isActivated) await mailService.sendActivationEmail(email, `https://soundnznode.herokuapp.com/api/user/activate:${candidate.activationLink}`)
 
		return {
			token,
			user: candidate
		}  
	}
	async setPlaylist(playlists, name) {
	 
		await UserModel.findOneAndUpdate({name}, {playlists})
	}
}
module.exports = new UserService()