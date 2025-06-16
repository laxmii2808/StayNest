const express = require("express");
const passport = require("passport");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signupUser));

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.loginUser
);

router.get("/logout", userController.logoutUser);

module.exports = router;
