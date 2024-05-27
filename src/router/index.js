import express from "express";
const router = express.Router();

// import controller
import { Login, Register } from "../controller/auth/AuthController.js";

// router
router.post("/login", Login);
router.post("/register", Register);

export default router;
