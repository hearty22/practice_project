import { body } from "express-validator";

import { userModel } from "../../models/users.js";

export const registerValidation = [
  body("username")
  .notEmpty().withMessage("El username es obligatorio")
  .isString().withMessage("El username debe ser una cadena de texto")
  .isLength({ min: 3, max: 20 }).withMessage("El username debe tener al menos 5 caracteres")
  .custom(async (value) => {
    const user = await userModel.findOne({ username: value });
    if (user) {
      throw new Error("El username ya está en uso");
    }
    return true;
  })
  ,
  body("email")
  .notEmpty().withMessage("El email es obligatorio")
  .isString().withMessage("El email debe ser una cadena de texto")
  .isEmail().withMessage("El email debe ser válido")
  .custom(async (value) => {
    const user = await userModel.findOne({ email: value });
    if (user) {
      throw new Error("El email ya está en uso");
    }
    return true;
  })
  ,
  body("password")
  .notEmpty().withMessage("La contraseña es obligatoria")
  .isString().withMessage("La contraseña debe ser una cadena de texto")
  .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
  ,
  body("profile.first_name")
  .notEmpty().withMessage("El nombre es obligatorio")
  .isString().withMessage("El nombre debe ser una cadena de texto")
  .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres")
  ,
  body("profile.last_name")
  .notEmpty().withMessage("El apellido es obligatorio")
  .isString().withMessage("El apellido debe ser una cadena de texto")
  .isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres")
  ,
  body("profile.age")
  .notEmpty().withMessage("La edad es obligatoria")
  .isNumeric().withMessage("La edad debe ser un número")
  .isInt().withMessage("La edad debe ser un número entero")
  ,
  body("profile.avatar")
  .optional().isString().withMessage("El avatar debe ser una cadena de texto"
  ,
  body("profile.phone")
  .optional()
  .isInt()
  .withMessage("El teléfono debe ser un número entero"))

]
