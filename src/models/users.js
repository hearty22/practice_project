import { Schema, model } from "mongoose";

const userSchema = new Schema({
  
  username: {
    type: String,
    required: true,
    unique: true
  }, 
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  profile:{
    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    age:{type: Number, required: true},
    avatar:{type: String, required: false},
    phone:{type: Number, required: true}
  },
  role: [
    {
      type: String,
      enum: ["admin", "customer", "support", "user"],
      default: "user"
    }
  ],
  adresses: [{
    alias: {type: String, required: false},
    city: {type: String, required: false},
    country: {type: String, required: false},
    postal_code: {type: Number, required: false},
    street: {type: String, required: false},
    number: {type: Number, required: false},
    is_default: {type: Boolean, required: false}
  }]
  
},{
  timestamps: true
  });

export const userModel = model("users", userSchema);

