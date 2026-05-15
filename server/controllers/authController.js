// business logic
// main backend functionality

// Example:
// register logic
// login logic


//“Is there already a user with this email in MongoDB?”

import User from "../models/User.js";
import bcrypt from "bcryptjs";//brcypt import
import jwt from "jsonwebtoken";//JWT import
// Register User Controller
export const registerUser = async (req, res) => {
  try {

    // Taking name, email and password from frontend request body
    const { name, email, password } = req.body;

    // Checking if user already exists in database
    const userExists = await User.findOne({ email });

    // If user already exists then send error response
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Creating new user in MongoDB database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });


    // Sending success response after registration
    res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {

    // If any server/database error occurs
    res.status(500).json({
      message: "Server Error",
    });
  }
};




export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }





    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};