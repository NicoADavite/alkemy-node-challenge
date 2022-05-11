import express from 'express';
const router = express.Router();

import { charactersController } from '../controllers/charactersController.js';

router.get('/', charactersController.index )

export default router;