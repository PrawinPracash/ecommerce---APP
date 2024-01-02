import express from "express";
import apiResponseHandler from "../common/Helpers/responseHandling";
import productController from "../controllers/product.controller";
const router = express();

router.get(
  "/api/v1/cart",
  async (req: express.Request, res: express.Response) => {
    try {
      const products = await productController.getCartProducts(req, res);
      return apiResponseHandler.onSuccess(res, "Success", products);
    } catch (err: any) {
      return apiResponseHandler.onError(res, err.message);
    }
  }
);

router.put(
  "/api/v1/cartItem",
  async (req: express.Request, res: express.Response) => {
    try {
      const products = await productController.addToCart(req, res);
      return apiResponseHandler.onSuccess(res, "Success", products);
    } catch (err: any) {
      return apiResponseHandler.onError(res, err.message);
    }
  }
);

export { router as CartRouter };
