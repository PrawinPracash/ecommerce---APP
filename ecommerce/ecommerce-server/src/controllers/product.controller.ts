import express from "express";
import Product from "../models/Product";
import productDao from "../daos/product.dao";

class ProductController {
  async createProduct(req: express.Request, res: express.Response) {
    try {
      const { title, brand, price, imageUrl, rating } = req.body;
      const payload = {
        title,
        brand,
        price,
        imageUrl,
        rating,
      };
      const product = productDao.createProduct(payload);
      return product;
    } catch (err: any) {
      throw err;
    }
  }

  async getAllProducts(req: express.Request, res: express.Response) {
    try {
      const products = productDao.getAllProducts();
      return products;
    } catch (err: any) {
      throw err;
    }
  }

  async addToCart(req: express.Request, res: express.Response) {
    try {
      const id = req.body.id;
      const product = productDao.addToCart(id);
      return product;
    } catch (err: any) {
      throw err;
    }
  }

  async getCartProducts(req: express.Request, res: express.Response) {
    try {
      const products = productDao.getCartProducts();
      return products;
    } catch (err: any) {
      throw err;
    }
  }
}

export default new ProductController();
