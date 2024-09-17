import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @desc    POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  res.send('auth user')
});



// @desc    Register user 
// @desc    POST /api/users 
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
  });
  


// @desc    Logout user & clear cookies
// @desc    GET /api/users/logout 
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
  });
  


// @desc    Get user profile
// @desc    GET /api/users/users/profile
// @access  Public

const getUser = asyncHandler(async (req, res) => {
    res.send('get user profile')
  });
  