import Config from "./config/config";
import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { ConnectOptions, connect } from "mongoose";
import { AuthRouter } from "./routes/auth.route";
import cors from "cors";
import passport from "passport";
import { ProductRouter } from "./routes/product.route";
import { CartRouter } from "./routes/cart.route";
const app = express();
app.use(express.json());
app.use(cors());
require("./config/passport");
app.use(passport.initialize());
app.use(AuthRouter, ProductRouter, CartRouter);

let db = Config.DB;
type ConnectionOptionsExtend = {
  useNewUrlParser: boolean;
};
const options: ConnectionOptionsExtend & ConnectOptions = {
  useNewUrlParser: true,
};

const PORT = Config.PORT;
mongoose
  .connect(db as string, options)
  .then((res) => {
    console.log("DB Connection Successful");
    app.listen(PORT, () => {
      console.log(`server is running on ${[PORT]}`);
    });
  })
  .catch((err: any) => {
    console.log("Error ----> ", err);
  });
