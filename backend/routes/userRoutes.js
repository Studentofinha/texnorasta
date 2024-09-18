import express from "express";
import {
    authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser).get(getUsers);

router.post("/logout",logoutUser)
router.post("/login",authUser)

export default router;
// Redux