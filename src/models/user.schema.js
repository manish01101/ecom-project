import mongoose from 'mongoose'
import AuthRoles from '../utils/authRoles'
import bcrypt from 'bcryptjs'

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

//encrypt the password before saving
userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next();
})

userSchema.methods = {
  //compare password
  comparePassword: async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
  }
}


export default mongoose.model("User", userSchema)