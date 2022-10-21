import express from "express";
import { getUsers, Register, Login, Logout, newAdmin } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getCars,getCarById,createCars,updateCars,deleteCars } from "../controllers/Cars.js";
const router = express.Router();
const prefix = '/v1/api/';

router.post(prefix + 'register', Register);
router.post(prefix + 'login', Login); 
router.delete(prefix + 'logout', Logout);

router.get(prefix + 'token', refreshToken);

//endpoint for superadmin only
router.post(prefix + 'addAdmin', verifyToken, newAdmin); 

router.get(prefix + 'users', verifyToken, getUsers);

//cars
router.get(prefix + 'cars', verifyToken, getCars);
router.get(prefix + 'cars/:id', verifyToken, getCarById);
router.post(prefix + 'car', verifyToken, createCars);
router.put(prefix + 'car/:id', verifyToken, updateCars);
router.delete(prefix + 'car/:id', verifyToken, deleteCars);

export default router;