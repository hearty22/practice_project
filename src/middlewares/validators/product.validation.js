import { body } from "express-validator";

export const createProductValidation = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("slug").notEmpty().withMessage("El slug es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria"),
  body("base_price").notEmpty().withMessage("El precio base es obligatorio"),
  body("category").notEmpty().withMessage("La categoría es obligatoria"),
  body("variants").isArray().withMessage("Las variantes deben ser un array"),
];
