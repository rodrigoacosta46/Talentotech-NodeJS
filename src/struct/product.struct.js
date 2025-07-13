import getTypes from "../utils/propTypeHandler.js";

export default class Product {
    static propsConfig = {
        name: {
            field: "name",
            type: "string",
            required: true
        },
        description: {
            field: "description",
            type: "string"
        },
        category: {
            field: "category",
            type: "string"
        },
        stock: {
            field: "stock",
            type: "number"
        },
        price: {
            field: "price",
            type: "number",
            required: true
        }
    }

    constructor(data = {}) {
        getTypes(data, Product.propsConfig);
        this.name = data.name;
        this.description = data.description ?? '';
        this.category = data.category ?? 'general';
        this.stock = data.stock ?? 0;
        this.price = data.price;
    }
}