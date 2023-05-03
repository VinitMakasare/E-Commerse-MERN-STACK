import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

export const resgisterController = async (req, res) => {
    console.log("in backend");

    const {name,email,password,phone,address} = req.body

    // console.log("name",name);
    // console.log("email",email);
    // console.log("password",password);
    // console.log("phone",phone);
    // console.log("address",address);

    // const users = await new userModel({
    //           name:"vvv",
    //           email:"vvv",
    //           phone:"8888",
    //           address:"12121",
    //           password:"123131"
    //         }).save();

    //         console.log("users",users);   



  try {
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
    }

    //Existing User

    const existingUser = await userModel.findOne({ email });
    console.log("existingUser",existingUser);

    if (existingUser) {
        console.log("existing usre");
      return res.status(200).send({
        success: true,
        message: "Already registed please login",
      });
    }

    // Register User

    const hashedPassword = await hashPassword(password);

    //save

    const users = new userModel({
      name,
      email,
      phone,
      address,
      password : hashedPassword
    }).save();

    res.status(201).send({
      success: true,
      message: "User registerd successfully",
      users,
    });
  } catch (error) {
    return res.send({error:error})
  }
};



// POST LOGIN

export const loginController = async (req,res) => {
  try {
    const {email,password} = req.body

     //validation

    if (!email || !password) {
      return res.status(500).send({
        success:false,
        message:"Invalid Email or Password"
      })
    }

    //Check User

    const user = await userModel.findOne({email})
    if (!user) {
      return res.status(404).send({
        success:false,
        message:"Email is not registered"
      })
    }

    console.log("user apssword",user.password);

    const match = await comparePassword(password,user.password)

    if (!match) {
      return res.status(200).send({
        success:false,
        message:"Invalid Email and Password"
      })
    }

    //JWT Token

    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET, {expiresIn:"7d"})
    res.status(200).send({
      success:true,
      message:"Login Succesfull",
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
      },
      token

    })

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in Login",
      error
    })
    
  }
}


//test controller

export const testController = async (req,res) => {
  
  res.send({
    message:true
  })
}