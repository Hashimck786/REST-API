import express, { Router } from 'express'
const router = express.Router();
import { getUser,getUserWithId,createUser,updateUser,deleteUser } from '../controllers/userController.js';


router.get('/', getUser)
router.post('/',createUser)
router.get('/:id',getUserWithId )
router.delete('/:id',deleteUser)
router.patch('/:id', updateUser)



export default router;