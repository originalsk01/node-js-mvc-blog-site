const express = require("express");
const bcrypt = require("bcryptjs");

const authController = require("../controllers/auth-controller");

const db = require("../data/database");

const router = express.Router();

router.get("/401", authController.get401);

router.get("/signup", authController.getSignUp);

router.get("/login", authController.getLogin);

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

module.exports = router;
