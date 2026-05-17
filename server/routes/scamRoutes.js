import express from "express";
import {
  analyzeScam,
  getScanHistory,
} from "../controllers/scamController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/analyze",protect,analyzeScam);

router.get("/history", protect, getScanHistory);

export default router;