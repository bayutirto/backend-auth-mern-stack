const express = require('express');
const router = express.Router();

const { register, login, forgotpassword, resetpassword } = require('../controllers/auth');

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotpassword);

router.route("/reset-password/:resetToken").put(resetpassword);


module.exports = router;