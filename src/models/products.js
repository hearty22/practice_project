import { Schema, model } from "mongoose";

const variantSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true
  },
  attributes:{
    type: Map,
    of: String
  },
  priceModifier: {
    type: Number,
    default: 0
  },
  stock:{
    type: Number,
    default: 0,
    required: true
  }
});


const productSchema = new Schema({
  name:{type: String, required: true, trim: true},
  slug:{type: String, unique: true, lowercase: true, index: true},
  description:{type: String},
  base_price: {type: Number, required: true},
  category:{type: String, index: true},
  active:{type: Boolean, default: true},
  variants:[variantSchema],
  images: {
    type: [String],
    default: []
  }
},{
    timestamps: true
  });

export const productModel = model("products", productSchema);
