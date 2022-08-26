import express from 'express'
import Category from '../models/categoryModel.js';

const CategoryRouter = express.Router();

//for fetch or get category from db
 //create category
CategoryRouter.post('/add', async(req, res) => {

    const newCategory = new Category(req.body);

    try {

        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);

    } catch(error) {
        console.log("Error!");
    }

});



CategoryRouter.get("/", async(req, res) => {

    const category = await Category.find();
    res.send(category);
});

export default CategoryRouter;