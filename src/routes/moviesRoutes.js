import express from 'express';
const router = express.Router();

import { moviesController } from '../controllers/moviesController.js';


router.get('/', moviesController.index)

export default router;