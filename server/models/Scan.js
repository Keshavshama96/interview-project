import mongoose from "mongoose";

const scanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    riskScore: {
      type: Number,
      required: true,
    },

    riskLevel: {
      type: String,
      required: true,
    },

    isScam: {
      type: Boolean,
      required: true,
    },

    matchedKeywords: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Scan = mongoose.model("Scan", scanSchema);

export default Scan;