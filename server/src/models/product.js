import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.model('Product', productSchema);
