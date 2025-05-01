import express from 'express';
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} from '../controllers/authController.js';
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js';
//router object
const router=express.Router()
//routing
router.post("/register",registerController);
router.post("/forgot-password",forgotPasswordController);
//login
router.post("/login",loginController);
//test route
router.get("/test",requireSignIN,isAdmin,testController)
//proteted route auth
router.get("/user-auth",requireSignIN,(req,res)=>{
    res.status(200).send({
        ok:true
    });
})
//protected admin route
router.get("/admin-auth",requireSignIN,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    });
});
//upfate profile
router.put('/profile',requireSignIN,updateProfileController);
//orders
router.get('/orders',requireSignIN,getOrdersController);
//all orders
router.get("/all-orders", requireSignIN, isAdmin, getAllOrdersController);
//order status update
router.put("/order-status/:orderId",requireSignIN,isAdmin,orderStatusController)
export default router