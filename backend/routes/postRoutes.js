const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost
} = require("../controllers/postController");

router.post("/", authMiddleware, createPost);
router.get("/", authMiddleware, getAllPosts);
router.get("/:id", authMiddleware, getPostById);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
