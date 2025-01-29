import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const product = db.products.find((item) => item.id === args.productId);
      return product;
    },
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const category = db.categories.find(
        (item) => item.id === args.categoryId
      );
      return category;
    },
    categories: () => db.categories,
  },
  Product: {
    category: ({ categoryId }) => {
      const category = db.categories.find((item) => item.id === categoryId);
      return category;
    },
  },
  Category: {
    products: ({ id }) => {
      const products = db.products.filter((item) => item.categoryId === id);
      return products;
    },
  },
};
