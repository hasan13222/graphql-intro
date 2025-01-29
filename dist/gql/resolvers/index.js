import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const product = db.products.find((item) => item.id === args.productId);
            return product;
        }
    },
};
