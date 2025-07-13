import db from "../config/db.js";
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc} from "firebase/firestore";
import customError from "../utils/customError.js";

const products = collection(db, "products");

export const createNewProduct = async (product) => {
    const ref = await addDoc(products, product).catch(() => {
        throw customError("Error creating new product", 500, "fail");
    });

    return { id: ref.id };
}

export const getAllProducts = async () => {
    const productList = await getDocs(products);
    return productList.docs.map(doc => ({id: doc.id, ...doc.data()}));
}

export const getProductById = async (id) => {
    const snapshot = await getDoc(doc(products, id)).catch(() => {
        throw customError(`Error finding product with id ${id}`, 500, "fail");
    });
    
    return snapshot.exists() ? snapshot.data() : null;
}

export const deleteProduct = async (id) => {    //  Si no existe de por si lo borra igual
    await deleteDoc(doc(products, id)).catch(() => {
        throw customError(`Error deleting product with id ${id}`, 500, "fail");
    });

    return { id: id }
}