import express from "express";
import cors from "cors";
import { __dirname, join } from "./utils/path.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import customError from "./utils/customError.js";
import authToken from "./middlewares/authToken.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "/public")));


//  Api routes
app.use("/api/products", authToken, productRoutes);
app.use("/auth", authRoutes);

app.use(() => {
    throw customError("Path not found", 404, "fail");
});

app.use(globalErrorHandler);

export default app;