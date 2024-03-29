import { Request, Response } from "express";

export interface IAuthController {
  login(req: Request, res: Response): Promise<void>;
  registerUser(req: Request, res: Response): Promise<void>;
  getUserAuthenticated(req: Request, res: Response): Promise<void>;
}
