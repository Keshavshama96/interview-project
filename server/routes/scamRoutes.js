import express from "express";
import { analyzeScam } from "../controllers/scamController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/analyze",protect,analyzeScam);

export default router;