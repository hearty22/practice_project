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
    phone:{type: Number, required: false}
  }
  
});

const userModel = model("users", userSchema);

export default userModel;
