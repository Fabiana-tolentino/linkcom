import { Router } from "express";
import { authModule } from "../factories/authFactory";

export const authRoutes = Router();

authRoutes.post("/login", authModule.login.bind(authModule));
authRoutes.post("/register", authModule.registerUser.bind(authModule));
authRoutes.get(
  "/user-authenticated",
  authModule.getUserAuthenticated.bind(authModule)
);
