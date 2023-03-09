import express from 'express';
import { getPostById, getPosts, savePost, updatePost, deletePost } from '../controllers/post.js';

const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', savePost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
