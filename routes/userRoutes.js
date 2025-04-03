import express from 'express'
import UserControllers from '../controllers/UserControllers.js'

const router = express.Router();

router.get('/usuarios', UserControllers.getUser);
router.post('/usuarios', UserControllers.createUser);

export default router;



