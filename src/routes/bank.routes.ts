import {Router} from "express";
import {createCategory, getCategories, getCategoryById, updateCategory, deleteCategory} from "../controllers/category.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { createBank, deleteBank, getBanks, updateBank } from "../controllers/bank.controller";

const router = Router();

router.post("/", authenticate, createBank);
router.get("/", getBanks);
router.post("/:id", authenticate, updateBank);
router.delete("/:id", authenticate, deleteBank);

export default router;