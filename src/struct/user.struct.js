import getTypes from "../utils/propTypeHandler.js";

export default class User {
    static propsConfig = {
        name: {
            field: "name",
            type: "string",
            required: true
        },
        mail: {
            field: "email",
            type: "string",
            required: true
        },
        password: {
            field: "password",
            type: "string"  //  No es requerido por seguridad al compartirlo.
        }
    }

    constructor(data = {}) {
        getTypes(data, User.propsConfig);
        this.name = data.name;
        this.mail = data.mail;
        this.password = data.password;
    }
}