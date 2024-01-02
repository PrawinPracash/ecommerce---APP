import express from "express";
import apiResponseHandler from "../common/Helpers/responseHandling";
import productController from "../controllers/product.controller";
import authMiddleware from "../common/middlewares/authentication";

const router = express();

router.post(
  "/api/v1/product",
  authMiddleware,
  async (req: express.Request, res: express.Response) => {
    try {
      const product = await productController.createProduct(req, res);
      return apiResponseHandler.onSuccess(res, "success", product);
    } catch (err: any) {
      return apiResponseHandler.onError(res, err.message);
    }
  }
);

router.get(
  "/api/v1/products",
  authMiddleware,
  async (req: express.Request, res: express.Response) => {
    try {
      const products = await productController.getAllProducts(req, res);
      return apiResponseHandler.onSuccess(res, "success", products);
    } catch (err: any) {
      return apiResponseHandler.onError(res, err.message);
    }
  }
);

export { router as ProductRouter };
