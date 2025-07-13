import * as model from "../models/product.model.js";

export const createNewProduct = async (product) => {
    return await model.createNewProduct({...product});
}

export const getAllProducts = async () => {
    return await model.getAllProducts();
}

export const getProductById = async (id) => {
    return await model.getProductById(id);
}

export const deleteProduct = async (id) => {
    return await model.deleteProduct(id);
}
