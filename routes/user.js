const express = require("express");
const router = express.Router();

const { login, register, dashboard } = require("../controllers/user");
const authMiddleware = require('../middleware/auth')

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);


module.exports = router;