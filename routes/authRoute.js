import express from 'express'
import {loginController, resgisterController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'




//Router Object
const router = express.Router()

//routing 
//REGISTER  || Method Post
router.post('/register', resgisterController)

//Login ||POST

router.post('/login', loginController)


//test

router.get('/test',requireSignIn, isAdmin, testController)

export default router