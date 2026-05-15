import express from "express";
import { registerUser,loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register route
// When frontend sends POST request to /register,
// this route will call registerUser controller
router.post("/register", registerUser);

router.post("/login", loginUser);

//middleware verification
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

export default router;