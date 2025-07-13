import * as services from "../services/product.service.js";
import Product from "../struct/product.struct.js";

const createNewProduct = async (req, res) => {
    const ref = await services.createNewProduct(new Product(req.body));
    res.status(201).json({ payload: ref });
}

const getAllProducts = async (req, res) => {
    const products = await services.getAllProducts();
    res.status(200).json({ payload: products });
}

const getProductById = async (req, res) => {
    const product = await services.getProductById(req.params.id);
    res.status(200).json({ payload: product });
}

const deleteProduct = async (req, res) => {
    const ref = await services.deleteProduct(req.params.id);

    res.status(200).json({
        payload: ref
    });
}

export default {createNewProduct, getAllProducts, getProductById, deleteProduct}