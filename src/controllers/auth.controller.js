import * as services from "../services/auth.service.js";
import User from "../struct/user.struct.js"
import tokenGenerator from "../utils/tokenGenerator.js";


export const createNewUser = async (req, res) => {
    const user = new User(req.body);
    
    await services.validateNewUser({...user});

    res.status(200).json({
        payload: tokenGenerator({...user})
    })
}

export const loginUser = async (req, res) => {
    const user = new User(req.body);
    
    await services.authLoginUser({...user});

    res.status(200).json({
        payload: tokenGenerator({...user})
    })
}