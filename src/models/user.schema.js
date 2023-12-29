import mongoose from 'mongoose'
import AuthRoles from '../utils/authRoles'


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ['true', 'Name is required'],
      maxLength: [120, "Name must be less than 50 chars"]
    },
    email: {
      type: String,
      required: ['true', 'Email is required'],
    },
    password: {
      type: String,
      required: ['true', 'Password is required'],
      maxLength: [15, "Password must be at least 8 chars"],
      select: false
    },
    role: {
      type: String,
      enum: Object.values(AuthRoles),
      default: AuthRoles.USER
    },
    forgetPasswordToken: String,
    forgetPasswordExpiry: Date //for given time changes is allowed
  },
  {timestamps: true}
)

export default mongoose.model("User", userSchema)