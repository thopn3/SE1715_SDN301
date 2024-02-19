import { productDAO } from "../repositories/index.js";

// R: Read all Products
const getAllProducts = async (req, res) => {
    try{
        
    }catch(error){
        res.status(500).json({
            message_err: error.toString()
        });
    }
}

// R: Read Product by ObjectId
const getProductByObjectId = async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message_err: error.toString()
        });
    }
}

// C: Create a new Product
const createProduct = async(req, res) => {
    try {
        const {name, price, description, category} = req.body;
        const result = await productDAO.createProduct({name, price, description, category});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

export default{
    getAllProducts,
    getProductByObjectId,
    createProduct
}