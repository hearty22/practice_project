import { Router } from "express"
import { getAllProducts } from "../controllers/product.controllers.js";
import {authMiddleware} from "../middlewares/auth/authenticate.js";
export const productRouter = Router();

productRouter.use(authMiddleware);

productRouter.get("/", getAllProducts);
