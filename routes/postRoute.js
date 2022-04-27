const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("", postController.getPost);

module.exports = router;