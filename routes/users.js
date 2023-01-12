import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { createUser, deleteUser, findUser, getAllUsers, updateUser } from "../controllers/users.js";


const router = express.Router();


router.get("/", getAllUsers)

router.post("/", createUser)

router.get("/:id", findUser)

router.delete("/:id", deleteUser)

router.patch("/:id", updateUser)

export default router