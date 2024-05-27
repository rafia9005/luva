const express = require("express");
const router = express.Router();

// import controller
const { Login, Register } = require("../controller/auth/AuthController.js");

// router
router.post("/login", Login);
router.post("/register", Register);

module.exports = router;
