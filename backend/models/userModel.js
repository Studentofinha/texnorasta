import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    required: true,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.matchPassword=async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model("User", userSchema);
export default User;
