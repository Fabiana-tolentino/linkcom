import { Router } from "express";
import { productModule } from "../factories/productFactories";

export const productRoutes = Router();

productRoutes.post(
  "/create-product",
  productModule.createProduct.bind(productModule)
);

productRoutes.get("/products", productModule.getAll.bind(productModule));

productRoutes.get(
  "/product/:id",
  productModule.getProductById.bind(productModule)
);
productRoutes.put(
  "/product/update/:id",
  productModule.updateProduct.bind(productModule)
);
