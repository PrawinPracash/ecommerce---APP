import mongoose from "mongoose";

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new mongoose.Schema<UserAttributes>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: { type: Date },
});
  
const User = mongoose.model("User", UserSchema);
export default User;