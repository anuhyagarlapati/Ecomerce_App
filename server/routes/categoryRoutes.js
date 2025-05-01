import express from "express";
import {requireSignIN,isAdmin} from "../middlewares/authMiddleware.js"
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/CategoryController.js";
const router=express.Router()
//create category
//routes
router.post('/create-category',requireSignIN,isAdmin,createCategoryController);
//update catgeory
router.put('/update-category/:id',requireSignIN,isAdmin,updateCategoryController);
//getAll category
router.get('/get-category',categoryController);
//single catgeory
router.get('/single-category/:slug',singleCategoryController);
//delete category
router.delete('/delete-category/:id',requireSignIN,isAdmin,deleteCategoryController);
export default router