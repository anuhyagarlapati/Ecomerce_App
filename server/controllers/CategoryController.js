import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";
export const createCategoryController=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name){
            return res.status(401).send({
                message:"Name is Requires"
            })
        }
        const existingCategory=await CategoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"Category Already Exists"
            })
        }
        const category=await new CategoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"new catgeory created",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Category",
        })
    }
}
//update catgegory Controller
export const updateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body;
        const {id}=req.params;
        const category=await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category Upadated Sucessfully",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error updating catgeory"
        })
    }
};
//getall cate
export const categoryController=async(req,res)=>{
    try {
        const category=await CategoryModel.find({});
        res.status(200).send({
            success:true,
            message:"All Categories List",
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all categories"
        })
    }
};
//single category controller
export const singleCategoryController=async(req,res)=>{
    try {
        const category=await CategoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message:"Get Single catgeory successfully",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting single categories"
        })
    }
};
//delete category controller
export const deleteCategoryController=async(req,res)=>{
    try {
        const {id}=req.params;
        await CategoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Catgeory deleted successfully",
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            error,
            message:"error while deleting catgeory"
        })
    }
}