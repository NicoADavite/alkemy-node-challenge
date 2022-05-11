//* Import Express and config Router
import express from 'express';
const router = express.Router();

//* Import Controller
import { usersController } from '../controllers/usersController.js';

//* Routes *//
//? Register - GET
router.get( '/register', usersController.register );

//? Login - GET
router.get( '/login', usersController.login );

//* Export Router
export default router;