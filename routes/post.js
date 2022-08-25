const express = require("express");
const userPost = require("../controllers/post");

const router = express.Router();
const authToken = require("../middleware/token");


router.post("/createPost", authToken, userPost.createPost);
router.post("/getAllPost", authToken, userPost.getAllPost);
router.post("/deletePost", authToken, userPost.deletePost);


module.exports = router;
