import { Router } from "express"
import { getAllProducts, createProduct } from "../controllers/product.controllers.js";
import {authMiddleware} from "../middlewares/auth/authenticate.js";
import { createProductValidation } from "../middlewares/validators/product.validation.js";
import { validator } from "../middlewares/validators/validator.js";

export const productRouter = Router();

productRouter.use(authMiddleware);

productRouter.get("/", getAllProducts);
productRouter.post("/", createProductValidation, validator, createProduct );
