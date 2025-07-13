import * as models from "../models/auth.model.js";
import customError from "../utils/customError.js";

export const validateNewUser = async user => {
    if (!user.password || user.password.length < 8 || user.name.length > 25 || !!!user.mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        throw customError("Invalid user input", 400, "fail");
 
    await models.createNewUser(user);
}

export const authLoginUser = async user => {
    const dbUser = await models.authLoginUser(user);
    if (!user?.password || !dbUser?.password || dbUser?.password != user?.password)
        throw customError("User is not authenticated", 401, "fail");
}
