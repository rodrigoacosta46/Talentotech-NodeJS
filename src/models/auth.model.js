import db from "../config/db.js";
import { collection, addDoc, getDocs, query, where, and, or} from "firebase/firestore";
import customError from "../utils/customError.js";
import User from "../struct/user.struct.js";

const usersCollection = collection(db, "users");

export const createNewUser = async user => {
    const snapshot = await getDocs(query(usersCollection, where(User.propsConfig.name.field, "==", user.name)));
    
    if (snapshot.docs?.at(0)) throw customError("User name already exists", 409, "fail");

    await addDoc(usersCollection, user).catch(() => {
        throw customError("Error creating new user", 500, "fail");
    });
}

export const authLoginUser = async user => {
    const snapshot = await getDocs(query(usersCollection, where(User.propsConfig.name.field, "==", user.name)));
    return snapshot.docs?.at(0)?.data();
}