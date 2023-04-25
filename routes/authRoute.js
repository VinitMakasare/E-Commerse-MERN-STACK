import express from 'express'
import {resgisterController} from '../controllers/authController.js'




//Router Object
const router = express.Router()

//routing 
//REGISTER  || Method Post
router.post('/register', resgisterController)

export default router