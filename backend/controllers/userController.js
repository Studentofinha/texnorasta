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
// @desc    GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
  });
  



// @desc    Get user profile
// @desc    PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile')
});




// @desc    Get users
// @desc    GET /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send('get users')
});

// @desc    Get user by ID
// @desc    GET /api/users/:id
// @access  Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send('get users by ID')
});


// @desc    Delete users
// @desc    DELETE /api/users/:id
// @access  Private/Admin

const deleteUsers = asyncHandler(async (req, res) => {
  res.send('delete users')
});

// @desc    Update user
// @desc    PUT /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send('update user')
});


export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser
}