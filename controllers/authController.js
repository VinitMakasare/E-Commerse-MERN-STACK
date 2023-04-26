import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const resgisterController = async (req, res) => {
    console.log("in backend");

    const users = new userModel({
              name:"vvv",
              email:"vvv",
              phone:"8888",
              address:"12121",
              password:"123131"
            }).save();

            console.log("users",users);

    



//   try {
//     if (!name) {
//       return res.send({ error: "Name is Required" });
//     }
//     if (!email) {
//       return res.send({ error: "Email is Required" });
//     }
//     if (!password) {
//       return res.send({ error: "Password is Required" });
//     }
//     if (!phone) {
//       return res.send({ error: "Phone is Required" });
//     }
//     if (!address) {
//       return res.send({ error: "address is Required" });
//     }

//     //Existing User

//     const existingUser = await userModel.findOne({ email });
//     console.log("existingUser",existingUser);

//     if (existingUser) {
//         console.log("existing usre");
//       return res.status(200).send({
//         success: true,
//         message: "Already registed please login",
//       });
//     }

//     // Register User

//     const hashedPassword = await hashPassword(password);

//     //save

//     const users = new userModel({
//       name,
//       email,
//       phone,
//       address,
//     //   password: hashedPassword,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "User registerd successfully",
//       users,
//     });
//   } catch (error) {
//     return res.send({error:error})
//   }
};
