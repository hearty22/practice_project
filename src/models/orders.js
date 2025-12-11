import { model , Schema } from "mongoose";

const orderItemSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true
  },
  sku:{type: String, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true, min: 1}
},{
    _id: false
  });

const orderSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: "users", required: true},
  items: [orderItemSchema],
  totalAmount: {type: Number, required: true},
  shippingAdress: {
    alias: {type: String, required: false},
    city: {type: String, required: false},
    country: {type: String, required: false},
    postal_code: {type: Number, required: false},
    street: {type: String, required: false},
    number: {type: Number, required: false},
  },
  status: {
    type: String,
    enum: ["pending","reserved", "paid", "shipped", "delivered", "cancelled"],
    default: "pending"
  },
  reservationExpiresAt: {
    type: Date,
    default: null,
    index: {exprires: 0}
  },
  paymentInfo: {
    provider: {type: String},
    transaction_id: {type: String},
    status: {type: String},
  }
},
  {
    timestamps: true
  });

export const orderModel = model("orders", orderSchema);
