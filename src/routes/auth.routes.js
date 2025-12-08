import { Router } from "express";
import { register } from "../controllers/auth.controllers.js"
import { registerValidation } from "../middlewares/validators/auth.validation.js";
import { validator } from "../middlewares/validators/validator.js"
export const authRouter = Router();

authRouter.post("/register", registerValidation, validator ,register );



