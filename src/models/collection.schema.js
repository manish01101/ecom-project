import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ['true', 'Please provide a collection name'],
      maxLength: [
        120,
        "Collection name should not be more than 120 chars"
      ]
    }
  },
  {timestamps: true}
)

export default mongoose.model("Collection", collectionSchema)
// Collection converted into collections in db (plurals and smallcase)