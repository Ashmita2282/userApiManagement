import express from 'express';
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controller/userController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/getUser', getAllUsers); // GET /users
router.get('/getUser/:id', getUserById); // GET /users/:id
router.post('/add-user', validateUser, addUser); // POST /users
router.put('/update-user/:id', validateUser, updateUser); // PUT /users/:id
router.delete('/delete-user/:id', deleteUser); // DELETE /users/:id

export default router;
