import jwt from "jsonwebtoken";
import "dotenv/config";

const tokenGenerator = input => {
    return jwt.sign(input, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export default tokenGenerator;