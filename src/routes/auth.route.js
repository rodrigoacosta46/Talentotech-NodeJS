import { Router } from "express";
import * as controller from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", controller.createNewUser);
router.post("/login", controller.loginUser);

export default router;