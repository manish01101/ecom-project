import dotenv from 'dotenv'

dotenv.config()

const config = {
  PORT: process.env.PORT || 3000,
  MONOGODB_URL: process.env.MONOGODB_URL || "mongodb://localhost:27017/ecom",
  JWT_SECRET: process.env.JWT_SECRET || "yoursecret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "15d"
}

export default config