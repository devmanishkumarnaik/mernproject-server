import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    benefits: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Medicine", MedicineSchema);