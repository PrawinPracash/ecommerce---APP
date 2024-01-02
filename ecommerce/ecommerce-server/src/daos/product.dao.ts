import Product, { productAttributes } from "../models/Product";

class ProductDao {
  async createProduct(data: productAttributes) {
    try {
      const product = await Product.create({
        title: data.title,
        brand: data.brand,
        price: data.price,
        rating: data.rating,
        imageUrl: data.imageUrl,
      });
      return product;
    } catch (err) {
      throw err;
    }
  }

  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (err) {
      throw err;
    }
  }

  async getCartProducts() {
    try {
      const products = await Product.find({
        inCart: true,
      });
      return products;
    } catch (err) {
      throw err;
    }
  }

  async addToCart(id: any) {
    try {
      const product = await Product.updateOne(
        {
          _id: id,
        },
        {
          $set: { inCart: true },
        }
      );
      return product;
    } catch (err) {
      throw err;
    }
  }

  async removeFromCart(id: any) {
    try {
      const products = await Product.updateOne(
        {
          _id: id,
        },
        {
          $set: { inCart: false },
        }
      );
      return products;
    } catch (err) {
      throw err;
    }
  }

  
}
export default new ProductDao();
