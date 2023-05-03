import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


//Protected route token base
export const requireSignIn = async (req, res, next) => {
  const decode = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  req.user = await decode 
  next()
  try {
  } catch (error) {
    console.log(error);
  }
};


//admin access
export const isAdmin = async (req,res,next) => {
    try {
        
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"Unaothorised"
            })
        }else{
            next()
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error
        })
    }
}
