import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      default: 'member'
    }
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('User', authSchema);
