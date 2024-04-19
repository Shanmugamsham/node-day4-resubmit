const express = require("express");
const router = express.Router();
const { signup, login, resetpassword } = require("../controllers/authControllers");

router.post("/signup", signup);
router.post("/login", login);
router.post("/reset", resetpassword);

module.exports = router;