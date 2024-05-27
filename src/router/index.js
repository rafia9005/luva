import express from "express";
const router = express.Router();

// import controller
import { Login, Register } from "../controller/auth/AuthController.js";
import {ProductGet} from "../controller/ProductController.js"
// router
router.get("/", (req, res) => {
  res.send("succes")
})
router.post("/login", Login);
router.post("/register", Register);
router.get("/product", ProductGet);
export default router;
