const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.post("/register", userController.createUser);
router.get("/auth", auth, userController.authUser);
router.post("/login", userController.logInUser);
router.get("/logout", auth, userController.logoutUser);

module.exports = router;
