import { isValidObjectId } from "mongoose";
import { CreateProductDto } from "../dtos/createProductDto";
import { Product } from "../models/productModel";
import { IProductRepo } from "../repos/productRepoInterface";
import { ProductRepo } from "./../repos/productRepo";
import { IProductService } from "./productServiceInterface";

export class ProductService implements IProductService {
  constructor(private productRepo: IProductRepo) {}

  async createProduct(productData: CreateProductDto): Promise<Product> {
    const newProduct = await this.productRepo.createProduct(productData);

    if (!newProduct) throw new Error("Product not created");

    return newProduct;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productRepo.getAll();

    if (!products || products.length === 0) {
      throw new Error("Product not found");
    }
    return products;
  }

  async getProductById(id: string): Promise<Product> {
    if (!isValidObjectId) throw new Error("Product not found");

    const product = await this.productRepo.getProductById(id);

    if (!product) throw new Error("Product not found");
    return product;
  }

  async updateProduct(
    id: string,
    productData: CreateProductDto
  ): Promise<Product> {
    if (!isValidObjectId) throw new Error("Product not found");
    const product = await this.productRepo.updateProduct(id, productData);

    if (!product) throw new Error("Product not found");
    return product;
  }
}
