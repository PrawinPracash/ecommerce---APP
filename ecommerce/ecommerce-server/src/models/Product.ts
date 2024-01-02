import mongoose, { mongo } from "mongoose";
import { title } from "process";

export interface productAttributes {
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  rating: number;
  inCart?: boolean;
}

const productSchema = new mongoose.Schema<productAttributes>({
  title: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: Number,
  },
  inCart:{
    type: Boolean,
    default: false
  }
});

const Product= mongoose.model('Product',productSchema);
export default Product;
