import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent:any, args:{productId: string}, context:any) => {
        const product = db.products.find((item) => item.id === args.productId);
        return product
    }
  },
};