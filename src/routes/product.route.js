import { Router } from "express";
import controller from "../controllers/product.controller.js";
//import asyncErrorHandler from "../utils/asyncErrorHandler.js";    Express v4

const router = Router();

router.get("/all", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/new", controller.createNewProduct);
router.delete("/:id", controller.deleteProduct);

export default router;