import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../modules/user/models/userModel";

export class Authorization {
  static async handlerAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { authorization } = req.headers;
      console.log(authorization);
      if (!authorization) throw new Error("Invalid authorization");
      const [, token] = authorization.split(" ");
      const decodeUser: any = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      );
      const userDecoded: User = { ...decodeUser._doc };
      console.log(userDecoded);

      if (userDecoded.typeUser !== "admin")
        throw new Error(`${userDecoded.typeUser} not permition to access`);

      return next();
    } catch (error: any) {
      res.status(401).json({ message: "access denied", error: error.message });
    }
  }
}
