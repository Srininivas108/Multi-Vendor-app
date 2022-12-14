import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import CategoryRouter from './routes/categoryRoutes.js';
import ProductRouter from './routes/productRoutes.js';
import UserRouter from './routes/userRoutes.js';
import OrderRouter from './routes/orderRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router

app.use('/api/category/', CategoryRouter);
app.use('/api/products/', ProductRouter);
app.use('/api/users/', UserRouter);
app.use('/api/orders/', OrderRouter);

//Connect with DB
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error.message);
});

//Create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at: http://localhost:${port}`);
});