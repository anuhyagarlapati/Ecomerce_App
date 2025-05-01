import express from 'express';
import {isAdmin, requireSignIN} from '../middlewares/authMiddleware.js'
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchController, updateProductController } from '../controllers/ProductController.js';
import formidable from 'express-formidable'
import braintree from 'braintree';
const router=express.Router()
//routes
router.post(
  "/create-product",
  requireSignIN,
  isAdmin,
  formidable(),
  createProductController
);
//update product
router.put(
  "/update-product/:pid",
  requireSignIN,
  isAdmin,
  formidable(),
  updateProductController,
);
//get products
router.get("/get-product",getProductController)

//single product
router.get("/get-product/:slug",getSingleProductController)
//get photo
router.get("/product-photo/:pid",productPhotoController)
//delete product
router.delete("/delete-product/:pid",deleteProductController);
//filter product
router.post('/product-filters',productFiltersController)
//product count
router.get("/product-count",productCountController);
//product per page
router.get("/product-list/:page",productListController);
//search product
router.get('/search/:keyword',searchController);
//similar product
router.get('/related-product/:pid/:cid',relatedProductController);
//category wise
router.get('/product-category/:slug',productCategoryController)
//payemnet routes
//token
router.get('/braintree/token',braintreeTokenController);
//payments
router.post('/braintree/payment',requireSignIN,braintreePaymentController);

export default router

