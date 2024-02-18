import { Router } from "express";
import { userModule } from "../factories/userFactories";
import { Authentication } from "../../../middlewares/authentication";
import { Authorization } from "../../../middlewares/authorization";

export const userRoutes = Router();
userRoutes.get(
  "/user/:id",
  Authentication.handler,
  userModule.getUserById.bind(userModule)
);
userRoutes.put(
  "/user-find/:email",
  Authentication.handler,
  userModule.getUserByEmail.bind(userModule)
);
userRoutes.put(
  "/user/update/:id",
  Authentication.handler,
  userModule.updateUser.bind(userModule)
);
//Rotas admin
userRoutes.put(
  "/user/delete/:id",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.softDelete.bind(userModule)
);
userRoutes.put(
  "/user/restore/:id",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.restoreUser.bind(userModule)
);
userRoutes.get(
  "/users",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.getAll.bind(userModule)
);
userRoutes.get(
  "/users/inactives",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.getAllDelete.bind(userModule)
);
userRoutes.put(
  "/user/add-gems/:id",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.addGems.bind(userModule)
);
userRoutes.put(
  "/user/subtract-gems/:id",
  Authentication.handler,
  Authorization.handlerAdmin,
  userModule.subtractGems.bind(userModule)
);
