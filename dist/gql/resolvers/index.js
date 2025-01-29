import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const product = db.products.find((item) => item.id === args.productId);
            return product;
        },
        category: (parent, args, context) => {
            const category = db.categories.find((item) => item.id === args.categoryId);
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
