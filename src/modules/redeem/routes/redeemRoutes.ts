import { Router } from "express";
import { redeemProductModule } from "../factories/redeemFactory";
import { Authentication } from "../../../middlewares/authentication";
import { Authorization } from "../../../middlewares/authorization";

export const redeemProductRoutes = Router();

redeemProductRoutes.post(
  "/redeem-product",
  Authentication.handler,
  redeemProductModule.addRedeemTransaction.bind(redeemProductModule)
);
redeemProductRoutes.get(
  "/transactions",
  Authentication.handler,
  Authorization.handlerAdmin,
  redeemProductModule.getAllRedeemTransactions.bind(redeemProductModule)
);
