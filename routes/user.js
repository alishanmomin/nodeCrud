const express = require("express");
const userAuth = require("../controllers/user");

const router = express.Router();
// const authToken = require("../middleware/token");


router.post("/register", userAuth.register);
router.post("/login", userAuth.signIn);


module.exports = router;
