import express from "express";
import authController from "../controllers/auth.controller";
import apiResponseHandler from "../common/Helpers/responseHandling"
import authMiddleware from "../common/middlewares/authentication";
import { authPlugins } from "mysql2";
const router = express();  

router.post(
  "/api/v1/register",   
  async (req: express.Request, res: express.Response) => {
    try{
        const user= await authController.register(req,res);
        return apiResponseHandler.onSuccess(res,"success",user);
    }catch(err: any){
        return apiResponseHandler.onError(res,err.message)
    }
  }
);

router.post(
  "/api/v1/login",
  async (req: express.Request, res: express.Response) => {
    try{
        const token= await authController.login(req,res);
        return apiResponseHandler.onSuccess(res,"Successfully logged In",token);
    }catch(err: any){
        return apiResponseHandler.onError(res,err.message)
    }
  }
);

router.get(
  "/api/v1/temp", authMiddleware,
  async (req: express.Request, res: express.Response) => {
    try{
        return apiResponseHandler.onSuccess(res,"success");
    }catch(err: any){
        return apiResponseHandler.onError(res,err.message)
    }
  }
);

export {router as AuthRouter}
