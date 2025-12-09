import jwt from "jsonwebtoken";


export const verifyToken = (token ) =>{
  return jwt.verify(token, process.env.JWT_SECRET);

}

export const signToken = (user) =>{
  if( !user._id ){
    throw new Error("usuario con _id invalido")
  }
  if( !process.env.JWT_SECRET){
    throw new Error("JWT_SECRET no esta configurado")
  }
  return jwt.sign({
    id: user._id,
    email: user.email,
    profile: user.profile
  }, process.env.JWT_SECRET,
    {
      expiresIn: "1d"
    }


  )
}
