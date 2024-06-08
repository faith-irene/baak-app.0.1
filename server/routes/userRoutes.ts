import { Router } from "express";
import { getUser, getUserById, createUser, updateUser, deleteUser } from "../controllers/user";

const router = Router();

router.get('/users', getUser);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;