import { Product } from "../model/product.model.js";

// Create - C
export const createProduct = async (req, res) => {
    const { name, description, price, category, stock } = req.body;
    
    try {
        const product = await Product.create({ 
            name, 
            description, 
            price, 
            category, 
            stock 
        });
        res.status(201).json({ 
            message: "Product created successfully", 
            product 
        });
    } catch (error) {
        console.log("Error in createProduct controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Read - R
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if(!products || products.length === 0){
            return res.status(404).json({ error: "No products found" });
        }
        res.status(200).json({message: "Products fetched successfully", products});
    } catch (error) {
        console.log("Error in getAllProducts controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Get Single Product
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({message: "Product fetched successfully", product});
    } catch (error) {
        console.log("Error in getProductById controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Update - U
export const updateProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!product){
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({message: "Product updated successfully", product});
    } catch (error) {
        console.log("Error in updateProductById controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Delete - D
export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({message: "Product deleted successfully", product});
    } catch (error) {
        console.log("Error in deleteProductById controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}