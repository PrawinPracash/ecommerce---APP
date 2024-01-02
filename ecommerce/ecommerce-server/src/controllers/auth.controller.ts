import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { error } from "console";
class AuthController {
  async register(req: express.Request, res: express.Response) {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdAt = new Date();
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        createdAt,
      });
      return user;
    } catch (err) {
      throw err;
    }
  }

  async login(req: express.Request, res: express.Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields required");
      }
      const user: any = await User.findOne({
        email: email,
      });
      if (!user) {
        throw new Error("User Not Existed");
      }
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        throw new Error("Password Incorrect");
      }
      const data = {
        email: email,
      };
      const token: string = jwt.sign(
        {
          data: data,
        },
        "secret",
        { expiresIn: "1h"}
      );

      return token;
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthController();
